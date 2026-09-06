/**
 * Lecture du géoréférencement d'un Geospatial PDF, sans GDAL ni proj4.
 *
 * ⚠️ CE FICHIER N'IMPORTE RIEN. C'est délibéré : il doit être testable en
 * vitest sans navigateur, et chargeable sans traîner pdf.js derrière lui.
 *
 * Tout ce qui suit a été MESURÉ le 2026-09-05 sur le plan DFCI de démonstration
 * de TchouSky (86 742 548 octets) et sur six échantillons du jeu de tests GDAL.
 * Les résultats détaillés vivent dans
 * `waypoint360-docs/WAYPOINT360_DJI_MAP_LAYERS_CADRAGE.md` § 4 et § 5.
 */

/** Un coin du calque : sa position géographique et sa position dans la page. */
export interface Corner {
  lat: number
  lon: number
  /** Abscisse en espace utilisateur PDF (origine en bas à gauche). */
  ux: number
  /** Ordonnée en espace utilisateur PDF. */
  uy: number
}

export interface Georeference {
  /** `/BBox` du viewport, en espace utilisateur PDF. */
  bbox: [number, number, number, number]
  /** Les quatre coins, dans l'ordre du `/GPTS` du document. */
  corners: Corner[]
  /** Le code du `/GCS`. ⚠️ Peut être un code ESRI, pas un code EPSG. */
  code?: string
  /** Le système est-il projeté (`/PROJCS`) plutôt que géographique ? */
  projected: boolean
  /** Emprise géographique, en degrés. */
  bounds: { lonMin: number, lonMax: number, latMin: number, latMax: number }
}

export class GeopdfUnreadable extends Error {
  constructor(public readonly reason:
    'ogc-best-practice' | 'no-viewport' | 'sans-measure-geo' | 'rotated-layer') {
    super(reason)
    this.name = 'GeopdfUnreadable'
  }
}

/**
 * ⚠️ LES OCTETS SONT LUS EN CLAIR, ET C'EST UNE HYPOTHÈSE À CONNAÎTRE.
 *
 * Sur les 8 fichiers examinés le 2026-09-05, AUCUN n'utilise de flux d'objets
 * (`/ObjStm`) : les dictionnaires géographiques sont écrits par la bibliothèque
 * géo, pas par un optimiseur PDF. Un PDF 1.5+ qui les compresserait rendrait ce
 * balayage aveugle.
 *
 * ⛔ Ce n'est PAS une preuve, c'est une tendance sur huit fichiers. Le jour où
 * un cas réel échoue, la voie est d'atteindre les objets bruts par pdf.js, qui
 * sait déjà lire les flux d'objets — pas de réécrire un lecteur PDF.
 */
export function readGeoreference(bytes: Uint8Array): Georeference {
  const text = new TextDecoder('latin1').decode(bytes)

  // ⛔ L'OGC Best Practice n'a AUCUN `/VP` : il passe par `/LGIDict` sur la
  // page, structure sans rapport. Refuser proprement plutôt que rendre un
  // résultat faux, qui placerait une carte n'importe où sans rien signaler.
  if (!text.includes('/VP') && text.includes('/LGIDict')) {
    throw new GeopdfUnreadable('ogc-best-practice')
  }

  const objectAt = (number: string): string => {
    const m = new RegExp(`(?<![0-9])${number} 0 obj`).exec(text)
    if (!m) return ''
    const start = m.index + m[0].length
    return text.slice(start, text.indexOf('endobj', start))
  }
  const numbers = (source: string, key: string): number[] | null => {
    const m = new RegExp(`${key}\\s*\\[([^\\]]+)\\]`).exec(source)
    return m ? m[1].trim().split(/\s+/).map(Number) : null
  }

  const ref = /\/VP\s*\[\s*(\d+)\s+0\s+R/.exec(text)
  if (!ref) throw new GeopdfUnreadable('no-viewport')

  const viewport = objectAt(ref[1])
  const bbox = numbers(viewport, '/BBox')
  const measureRef = /\/Measure\s+(\d+)\s+0\s+R/.exec(viewport)
  if (!bbox || bbox.length !== 4 || !measureRef) throw new GeopdfUnreadable('no-viewport')

  const measure = objectAt(measureRef[1])
  if (!/\/Subtype\s*\/GEO/.test(measure)) throw new GeopdfUnreadable('sans-measure-geo')

  const gpts = numbers(measure, '/GPTS')
  const lpts = numbers(measure, '/LPTS')
  if (!gpts || !lpts || gpts.length < 8 || lpts.length < 8) throw new GeopdfUnreadable('sans-measure-geo')

  const gcsRef = /\/GCS\s+(\d+)\s+0\s+R/.exec(measure)
  const gcs = gcsRef ? objectAt(gcsRef[1]) : ''

  /**
   * ⚠️ `/GPTS` EST TOUJOURS EN DEGRÉS GÉOGRAPHIQUES, y compris pour un PDF
   * projeté. Vérifié sur un Lambert-93 fabriqué avec GDAL : ses `/GPTS` valent
   * exactement la reprojection de (300000, 6700000).
   *
   * ⛔ C'EST CE QUI NOUS DISPENSE DE proj4, et ce n'est pas un détail. `proj4`
   * accepte SANS ERREUR le WKT d'un fichier au code ESRI et rend un point faux
   * de 4 574 km : latitude 86° au lieu de 45°. Un fichier qui porte déjà ses
   * coins en WGS84 nous évite d'avoir à lui faire confiance.
   */
  const corners: Corner[] = []
  for (let k = 0; k < 4; k++) {
    const [lat, lon] = [gpts[2 * k], gpts[2 * k + 1]]
    const [lx, ly] = [lpts[2 * k], lpts[2 * k + 1]]
    corners.push({
      lat, lon,
      ux: bbox[0] + lx * (bbox[2] - bbox[0]),
      uy: bbox[1] + ly * (bbox[3] - bbox[1]),
    })
  }

  const lons = corners.map(c => c.lon)
  const lats = corners.map(c => c.lat)
  return {
    bbox: bbox as [number, number, number, number],
    corners,
    code: /\/EPSG\s+(\d+)/.exec(gcs)?.[1],
    projected: /\/PROJCS/.test(gcs),
    bounds: {
      lonMin: Math.min(...lons), lonMax: Math.max(...lons),
      latMin: Math.min(...lats), latMax: Math.max(...lats),
    },
  }
}

/**
 * Le calque est-il aligné sur les axes en WGS84 ?
 *
 * ⛔ NE PAS S'EN SERVIR POUR REFUSER UN FICHIER. Un GeoPDF en **Lambert-93 ne
 * l'est PAS** : mesuré le 2026-09-05, ses quatre coins forment un quadrilatère
 * légèrement tourné, le bord haut dérivant de 47,2796° à 47,2855° sur 10 km,
 * soit environ 660 m. Une projection conique conserve rarement le graticule.
 *
 * Une première version refusait tout ce qui n'était pas aligné : elle aurait
 * rejeté **exactement le cas d'usage visé**, le plan DFCI français. C'est
 * `pixelFromLonLat` qui traite le cas général, par interpolation bilinéaire.
 *
 * Cette fonction ne sert donc qu'à SAVOIR, pas à trancher : un calque aligné
 * autorise un simple recadrage, un calque tourné demande l'interpolation.
 */
export function isAxisAligned(g: Georeference): boolean {
  const distinct = (xs: number[]) => new Set(xs.map(x => x.toFixed(9))).size
  return distinct(g.corners.map(c => c.lon)) === 2 && distinct(g.corners.map(c => c.lat)) === 2
}

/**
 * lon/lat → position dans le raster, par interpolation bilinéaire inverse sur
 * les quatre coins.
 *
 * ⚠️ L'ORDRE DES COINS SUIT `/GPTS` et n'est pas garanti : on les range par
 * position dans la page avant d'interpoler. Les supposer dans l'ordre
 * haut-gauche, haut-droite, bas-gauche, bas-droite marche sur le plan de
 * démonstration et casse ailleurs.
 *
 * L'écart de cette interpolation face à une vraie reprojection est chiffré par
 * `interpolationErrorMetres` : moins d'un demi-pixel sur un plan de terrain.
 */
export function pixelFromLonLat(
  g: Georeference,
  width: number,
  height: number,
): (lon: number, lat: number) => { x: number, y: number } {
  // Rangés par ordonnée de page décroissante (haut d'abord), puis par abscisse.
  const sorted = [...g.corners].sort((a, b) => (b.uy - a.uy) || (a.ux - b.ux))
  const [topLeft, topRight, bottomLeft, bottomRight] = sorted

  const uxMin = Math.min(...g.corners.map(c => c.ux))
  const uxMax = Math.max(...g.corners.map(c => c.ux))
  const uyMin = Math.min(...g.corners.map(c => c.uy))
  const uyMax = Math.max(...g.corners.map(c => c.uy))

  return (lon, lat) => {
    // Fractions le long des deux axes du quadrilatère géographique.
    const fy = (topLeft.lat + topRight.lat) / 2 === (bottomLeft.lat + bottomRight.lat) / 2
      ? 0
      : ((topLeft.lat + topRight.lat) / 2 - lat) / ((topLeft.lat + topRight.lat) / 2 - (bottomLeft.lat + bottomRight.lat) / 2)
    const lonLeft = topLeft.lon + (bottomLeft.lon - topLeft.lon) * fy
    const lonRight = topRight.lon + (bottomRight.lon - topRight.lon) * fy
    const fx = lonRight === lonLeft ? 0 : (lon - lonLeft) / (lonRight - lonLeft)

    // Puis retour en espace utilisateur PDF, converti en pixels du raster.
    const ux = uxMin + fx * (uxMax - uxMin)
    const uy = uyMax - fy * (uyMax - uyMin)
    return {
      x: (ux - uxMin) / (uxMax - uxMin) * width,
      y: (uyMax - uy) / (uyMax - uyMin) * height,
    }
  }
}

/**
 * L'écart, en mètres, que coûte l'interpolation des coins au lieu d'une vraie
 * reprojection. Il croît avec l'emprise et avec la courbure de la projection.
 *
 * ⚠️ MESURÉ EN LAMBERT-93 le 2026-09-05, en comparant à GDAL :
 *   10 km (un plan DFCI) →     2,14 m, soit moins d'un demi-pixel
 *   50 km                →    53,23 m
 *  500 km                → 5 405,61 m
 *
 * L'ordre de grandeur suit le carré de l'emprise, d'où cette approximation.
 * Elle sert à AVERTIR, pas à corriger : au-delà, c'est proj4 qu'il faut, avec
 * la prudence que son échec silencieux impose.
 */
export function interpolationErrorMetres(g: Georeference): number {
  const midLat = (g.bounds.latMin + g.bounds.latMax) / 2
  const widthKm = (g.bounds.lonMax - g.bounds.lonMin) * 111.32 * Math.cos(midLat * Math.PI / 180)
  const heightKm = (g.bounds.latMax - g.bounds.latMin) * 110.57
  const diagonalKm = Math.hypot(widthKm, heightKm)
  // Calé sur la mesure : 2,14 m pour une diagonale d'environ 14,1 km.
  return 2.14 * (diagonalKm / 14.14) ** 2
}

/** Résolution du raster source, en mètres par pixel. */
export function metresPerPixel(g: Georeference, rasterWidth: number): number {
  const midLat = (g.bounds.latMin + g.bounds.latMax) / 2
  return (g.bounds.lonMax - g.bounds.lonMin) * 111320 * Math.cos(midLat * Math.PI / 180) / rasterWidth
}

/**
 * Le niveau de zoom NATIF : celui dont la résolution est la plus proche de la
 * source, en échelle logarithmique.
 *
 * ⛔ NE PAS PRENDRE LE PREMIER NIVEAU QUI PASSE SOUS LA RÉSOLUTION SOURCE. Cela
 * sur-échantillonne d'un cran, donc quadruple le nombre de tuiles pour aucune
 * information de plus. GDAL choisit le plus proche, et il a raison.
 *
 * ⚠️ MESURÉ : l'outil tiers conseille « zoom 12 à 18 ». Sur le plan de
 * démonstration, la résolution source vaut 5,48 m/pixel, soit z14. Aller
 * jusqu'à z18 produit 22 506 tuiles dont 22 440 sur-échantillonnées (99,7 %),
 * et environ 264 Mo au lieu de 0,8 Mo.
 */
export function nativeZoom(g: Georeference, rasterWidth: number): number {
  const target = metresPerPixel(g, rasterWidth)
  const midLat = (g.bounds.latMin + g.bounds.latMax) / 2
  const resolutionAt = (z: number) => 156543.03392 * Math.cos(midLat * Math.PI / 180) / 2 ** z
  let best = 0
  let gap = Infinity
  for (let z = 0; z <= 22; z++) {
    const d = Math.abs(Math.log(resolutionAt(z) / target))
    if (d < gap) { gap = d; best = z }
  }
  return best
}
