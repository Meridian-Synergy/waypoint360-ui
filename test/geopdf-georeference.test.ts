import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import {
  readGeoreference, isAxisAligned, interpolationErrorMetres,
  metresPerPixel, nativeZoom, GeopdfUnreadable,
} from '../src/geopdf/georeference'

const ROOT = fileURLToPath(new URL('.', import.meta.url))
const readFixture = (name: string) => new Uint8Array(readFileSync(join(ROOT, 'fixtures/geopdf', name)))

describe('lecture du géoréférencement d\'un Geospatial PDF', () => {
  /**
   * ⚠️ LA VÉRITÉ TERRAIN EST GDAL. Ces valeurs viennent de `gdalinfo` sur les
   * mêmes fichiers, le 2026-09-05. Le prototype reproduisait GDAL à 4×10⁻¹⁶
   * degré près sur le plan DFCI de démonstration ; ici on vérifie que le
   * portage en TypeScript n'a rien perdu.
   */
  it('lit les quatre corners et le système déclaré', () => {
    const g = readGeoreference(readFixture('test_iso32000.pdf'))
    expect(g.corners).toHaveLength(4)
    expect(g.code).toBe('4326')
    expect(g.projected).toBe(false)
    expect(isAxisAligned(g)).toBe(true)
  })

  /**
   * ⛔ L'OGC BEST PRACTICE N'A AUCUN `/VP`. Il passe par `/LGIDict`, structure
   * sans rapport. Le refus doit être EXPLICITE : un lecteur qui rendrait un
   * résultat approximatif placerait la carte n'importe où sans rien signaler.
   */
  it('refuse l\'encodage OGC Best Practice au lieu de deviner', () => {
    expect(() => readGeoreference(readFixture('test_ogc_bp.pdf')))
      .toThrowError(expect.objectContaining({ reason: 'ogc-best-practice' }))
  })

  /**
   * ⚠️ `/GPTS` EST EN DEGRÉS MÊME POUR UN PDF PROJETÉ, et c'est ce qui nous
   * dispense de proj4.
   *
   * ⛔ Pourquoi ça compte : `proj4` accepte SANS ERREUR le WKT en dialecte ESRI
   * de `esri_102422` et rend un point faux de 4 574 km, latitude 86° au lieu de
   * 45°. Mesuré le 2026-09-05. Un fichier qui porte déjà ses coins en WGS84
   * nous évite d'avoir à lui faire confiance.
   */
  it('rend des degrés WGS84 même quand le système est projeté', () => {
    const l93 = readGeoreference(readFixture('gdal_lambert93_epsg2154.pdf'))
    expect(l93.projected).toBe(true)
    expect(l93.code).toBe('2154')
    // GDAL reprojette les quatre coins du raster (300000-310000 E,
    // 6690000-6700000 N) ainsi :
    //   (300000, 6700000) → lon -2.295446  lat 47.279556   haut gauche
    //   (310000, 6700000) → lon -2.163442  lat 47.285513   haut droite
    //   (300000, 6690000) → lon -2.286596  lat 47.189731
    //   (310000, 6690000) → lon -2.154811  lat 47.195679
    expect(l93.bounds.lonMin).toBeCloseTo(-2.295446, 5)
    expect(l93.bounds.latMax).toBeCloseTo(47.285513, 5)
    expect(l93.bounds.latMin).toBeCloseTo(47.189731, 5)

    /**
     * ⛔ ET IL N'EST PAS ALIGNÉ SUR LES AXES. Le bord haut dérive de 47,2796° à
     * 47,2855°, soit environ 660 m sur 10 km : une projection conique ne
     * conserve pas le graticule. Une première version refusait tout calque non
     * aligné, ce qui aurait rejeté EXACTEMENT le cas d'usage visé.
     */
    expect(isAxisAligned(l93), 'un Lambert-93 n\'est pas aligné').toBe(false)

    // Et le fichier au code ESRI se lit tout aussi bien par ses GPTS.
    const esri = readGeoreference(readFixture('esri_102422_as_epsg_code.pdf'))
    expect(esri.code).toBe('102422')   // ⚠️ code ESRI, PAS un code EPSG
    expect(esri.bounds.latMin).toBeGreaterThan(33)
    expect(esri.bounds.latMax).toBeLessThan(34)
  })
})

describe('choix du niveau de zoom', () => {
  /**
   * ⛔ NE PAS PRENDRE LE PREMIER NIVEAU QUI PASSE sous la résolution source :
   * cela sur-échantillonne d'un cran et quadruple les tuiles pour rien.
   *
   * Cas mesuré sur le plan DFCI de démonstration : 1684 px de large pour une
   * emprise de 0,116075° de longitude à 44,41° de latitude, soit 5,48 m/pixel.
   * GDAL a choisi z14 (6,83 m/pixel) et non z15 (3,41).
   */
  const PLAN_DFCI = {
    bbox: [0, 0, 1684, 2384] as [number, number, number, number],
    corners: [], projected: false,
    bounds: { lonMin: -1.1786907, lonMax: -1.0626153, latMin: 44.3263649, latMax: 44.4907074 },
  }

  it('choisit le niveau natif, comme GDAL, et pas celui du dessus', () => {
    expect(metresPerPixel(PLAN_DFCI as never, 1684)).toBeCloseTo(5.48, 1)
    expect(nativeZoom(PLAN_DFCI as never, 1684)).toBe(14)
  })

  it('suit la résolution : deux fois plus de pixels, un niveau de plus', () => {
    expect(nativeZoom(PLAN_DFCI as never, 3368)).toBe(15)
    expect(nativeZoom(PLAN_DFCI as never, 842)).toBe(13)
  })
})

describe('l\'écart de l\'interpolation des corners', () => {
  /**
   * ⚠️ CE SEUIL DÉCIDE SI proj4 EST NÉCESSAIRE. Mesuré en Lambert-93 contre
   * GDAL le 2026-09-05 : 2,14 m sur 10 km, 53 m sur 50 km, 5 406 m sur 500 km.
   * Sur le cas d'usage visé, un plan DFCI, l'écart vaut moins d'un demi-pixel.
   */
  const carre = (km: number) => ({
    bounds: { lonMin: 0, lonMax: km / (111.32 * Math.cos(47 * Math.PI / 180)), latMin: 47, latMax: 47 + km / 110.57 },
  })

  it('reste sous le demi-pixel sur un plan de terrain', () => {
    expect(interpolationErrorMetres(carre(10) as never)).toBeLessThan(3)
  })

  it('devient visible sur une carte régionale', () => {
    expect(interpolationErrorMetres(carre(50) as never)).toBeGreaterThan(20)
    expect(interpolationErrorMetres(carre(500) as never)).toBeGreaterThan(1000)
  })
})

describe('les erreurs portent une reason exploitable', () => {
  it('nomme la reason, pour que l\'interface puisse la traduire', () => {
    try {
      readGeoreference(new Uint8Array(Buffer.from('%PDF-1.4 rien du tout')))
      expect.unreachable('un PDF sans viewport doit être refusé')
    } catch (e) {
      expect(e).toBeInstanceOf(GeopdfUnreadable)
      expect((e as GeopdfUnreadable).reason).toBe('no-viewport')
    }
  })
})
