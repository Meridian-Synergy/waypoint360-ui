/**
 * GeoPDF vers MBTiles, entièrement dans le navigateur.
 *
 * ⚠️ AUCUN OCTET NE QUITTE LE POSTE, et c'est l'argument produit, pas une
 * commodité technique. Un plan DFCI ou un plan de masse client ne se téléverse
 * pas chez un tiers : c'est précisément ce qu'un exécutable Windows non signé
 * ne peut pas promettre de façon crédible.
 *
 * ⛔ LES IMPORTS SONT DYNAMIQUES, DÉLIBÉRÉMENT. pdf.js pèse 448 Ko et sql.js
 * 688 Ko, mesurés le 2026-09-05. Les importer en tête de module ferait payer
 * 1,1 Mo à CHAQUE page du site, pour un outil qu'on ouvre rarement.
 */
import {
  readGeoreference, pixelFromLonLat, nativeZoom, interpolationErrorMetres,
  type Georeference,
} from './georeference'

export const TILE_SIZE = 256

/** Grille Web Mercator, convention XYZ : origine en HAUT à gauche. */
export const lonToX = (lon: number, z: number) => (lon + 180) / 360 * 2 ** z
export const latToY = (lat: number, z: number) => {
  const r = lat * Math.PI / 180
  return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** z
}
export const xToLon = (x: number, z: number) => x / 2 ** z * 360 - 180
export const yToLat = (y: number, z: number) => {
  const n = Math.PI - 2 * Math.PI * y / 2 ** z
  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))
}

export interface Progress {
  step: 'reading' | 'rendering' | 'tiling' | 'packing'
  done: number
  total: number
}

export interface Result {
  file: Blob
  zoom: number
  tileCount: number
  bounds: Georeference['bounds']
  rasterWidth: number
  rasterHeight: number
  /** Écart estimé de l'interpolation, en mètres. Sert à AVERTIR. */
  errorMetres: number
}

/**
 * ⚠️ LE NIVEAU DE ZOOM NE SE CHOISIT PAS, IL SE CALCULE. L'outil tiers conseille
 * « 12 à 18 » : sur le plan de démonstration, cela produit 22 506 tuiles dont
 * 22 440 sur-échantillonnées, soit 99,7 % de pixels agrandis sans une seule
 * information de plus, et environ 264 Mo au lieu de 0,8 Mo.
 *
 * `extraZoomLevels` existe pour un seul cas, non tranché : si DJI Pilot 2
 * ne sur-zoome pas au-delà de `maxzoom`, la carte disparaîtrait en zoomant et il
 * faudrait produire un ou deux niveaux de confort. À trancher sur matériel.
 */
export async function convert(
  bytes: Uint8Array,
  options: {
    extraZoomLevels?: number
    onProgress?: (a: Progress) => void
    /**
     * ⚠️ LE CHEMIN DES ASSETS SE DÉCLARE, IL NE SE DEVINE PAS. Ce moteur sert
     * désormais deux applications ; un `/wasm/` codé en dur marcherait chez la
     * première et rendrait un 404 chez la seconde, au moment du clic et jamais
     * au build. C'est exactement de cette façon que `sql-wasm.wasm` a échoué le
     * 2026-09-05 : typage vert, lint vert, 404 à l'exécution.
     */
    assetsBase?: string
  } = {},
): Promise<Result> {
  const { extraZoomLevels = 0, onProgress, assetsBase = '/wasm/' } = options
  const report = (step: Progress['step'], done: number, total: number) =>
    onProgress?.({ step, done, total })

  report('reading', 0, 1)
  const geo = readGeoreference(bytes)
  report('reading', 1, 1)

  // Le raster est rendu à la résolution de la zone géoréférencée, pas de la page :
  // la marge hors calque ne porte aucune information et gonflerait la mémoire.
  const usefulWidth = Math.max(1, Math.round(geo.bbox[2] - geo.bbox[0]))

  report('rendering', 0, 1)
  const { canvas, width, height } = await renderPage(bytes, usefulWidth, assetsBase)
  report('rendering', 1, 1)

  const zoom = nativeZoom(geo, width) + extraZoomLevels
  const toPixel = pixelFromLonLat(geo, width, height)

  const x0 = Math.floor(lonToX(geo.bounds.lonMin, zoom))
  const x1 = Math.ceil(lonToX(geo.bounds.lonMax, zoom))
  const y0 = Math.floor(latToY(geo.bounds.latMax, zoom))
  const y1 = Math.ceil(latToY(geo.bounds.latMin, zoom))
  const total = Math.max(1, (x1 - x0) * (y1 - y0))

  const SQL = await loadSql(assetsBase)
  const db = new SQL.Database()
  db.run(`CREATE TABLE metadata (name text, value text);
          CREATE TABLE tiles (zoom_level integer, tile_column integer, tile_row integer, tile_data blob);
          CREATE UNIQUE INDEX tile_index ON tiles (zoom_level, tile_column, tile_row);`)
  const meta: Record<string, string> = {
    name: 'waypoint360',
    type: 'overlay',
    version: '1.1',
    description: 'Converti par Waypoint360',
    format: 'png',
    bounds: `${geo.bounds.lonMin},${geo.bounds.latMin},${geo.bounds.lonMax},${geo.bounds.latMax}`,
    minzoom: String(zoom),
    maxzoom: String(zoom),
  }
  for (const [k, v] of Object.entries(meta)) db.run('INSERT INTO metadata VALUES (?,?)', [k, v])

  const tile = document.createElement('canvas')
  tile.width = TILE_SIZE
  tile.height = TILE_SIZE
  const ctx = tile.getContext('2d')!

  let n = 0
  for (let tx = x0; tx < x1; tx++) {
    for (let ty = y0; ty < y1; ty++) {
      const topLeft = toPixel(xToLon(tx, zoom), yToLat(ty, zoom))
      const bottomRight = toPixel(xToLon(tx + 1, zoom), yToLat(ty + 1, zoom))
      /**
       * ⚠️ PNG ET NON JPEG, et c'est un choix mesuré. Le JPEG ne porte pas de
       * transparence : les marges hors carte peindraient un aplat par-dessus le
       * fond de carte DJI. GDAL les laisse noires, une première version les
       * remplissait en blanc, et aucun des deux n'est bon pour un calque
       * annoncé `type: overlay`.
       */
      ctx.clearRect(0, 0, TILE_SIZE, TILE_SIZE)
      ctx.drawImage(canvas, topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y, 0, 0, TILE_SIZE, TILE_SIZE)
      const data = await canvasToBytes(tile)
      /**
       * ⚠️ MBTiles suit TMS : origine en BAS. La convention XYZ met l'origine en
       * haut. Oublier ce retournement donne une carte en miroir vertical, et
       * c'est le seul symptôme.
       */
      db.run('INSERT INTO tiles VALUES (?,?,?,?)', [zoom, tx, 2 ** zoom - 1 - ty, data])
      n++
      if (n % 8 === 0) {
        report('tiling', n, total)
        // Rendre la main au navigateur, sinon l'onglet gèle sur une grosse carte.
        await new Promise(r => setTimeout(r, 0))
      }
    }
  }
  report('tiling', total, total)

  report('packing', 0, 1)
  /**
   * ⛔ `application/octet-stream`, PAS `application/vnd.mapbox-vector-tile`. Un
   * MBTiles est une base SQLite, et celui-ci porte des tuiles PNG : le type
   * vectoriel était faux dans les deux dimensions. Sans conséquence tant que le
   * fichier ne faisait que se télécharger — et avec, dès qu'il se téléverse : le
   * seau `mission-maps` n'accepte que l'octet-stream et aurait refusé le dépôt.
   */
  const file = new Blob([db.export() as BlobPart], { type: 'application/octet-stream' })
  db.close()
  report('packing', 1, 1)

  return {
    file, zoom, tileCount: n, bounds: geo.bounds,
    rasterWidth: width, rasterHeight: height,
    errorMetres: interpolationErrorMetres(geo),
  }
}

async function canvasToBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  const blob = await new Promise<Blob | null>(r => canvas.toBlob(r, 'image/png'))
  if (!blob) throw new Error('encodage de tile impossible')
  return new Uint8Array(await blob.arrayBuffer())
}

async function loadSql(assetsBase: string) {
  const initSqlJs = (await import('sql.js')).default
  // ⚠️ Le `.wasm` est servi depuis `public/`, pas depuis un CDN : la politique
  // de sécurité des deux applications n'autorise aucun hôte externe, et c'est voulu.
  return initSqlJs({ locateFile: (f: string) => `${assetsBase}${f}` })
}

async function renderPage(bytes: Uint8Array, targetWidth: number, assetsBase: string) {
  const pdfjs = await import('pdfjs-dist')
  // ⚠️ Le worker est servi localement pour la même raison.
  pdfjs.GlobalWorkerOptions.workerSrc = `${assetsBase}pdf.worker.min.mjs`
  /**
   * ⛔ `isEvalSupported: false` A ÉTÉ RETIRÉ, ET IL NE PROTÉGEAIT DÉJÀ PLUS RIEN.
   * Mesuré le 2026-09-06 : l'option n'existe ni dans les types ni dans le build
   * livré de pdfjs-dist v6. Nous passions donc un drapeau de durcissement inerte,
   * ce qui est pire que pas de drapeau du tout : il se lit comme une garantie.
   * `disableFontFace` existe toujours et reste posé.
   */
  const task = pdfjs.getDocument({ data: bytes, disableFontFace: true })
  const doc = await task.promise
  const page = await doc.getPage(1)
  const base = page.getViewport({ scale: 1 })
  const vp = page.getViewport({ scale: targetWidth / base.width })
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(vp.width)
  canvas.height = Math.round(vp.height)
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  await page.render({ canvas, canvasContext: ctx, viewport: vp }).promise
  await task.destroy()
  return { canvas, width: canvas.width, height: canvas.height }
}
