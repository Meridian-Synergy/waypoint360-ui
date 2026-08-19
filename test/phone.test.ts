import { describe, it, expect } from 'vitest'
import { toE164, formatPhone } from '../src/utils/phone'

/**
 * ⚠️ CES CAS SONT PARTAGÉS AVEC L'API, mot pour mot.
 *
 * `waypoint360-api/src/lib/phone.ts` porte la même règle : elle tourne sur le
 * serveur et ne peut pas importer ce paquet. La duplication est donc inévitable,
 * mais les deux jeux de cas sont identiques — si l'un dérive, l'autre tombe.
 *
 * Les valeurs refusées viennent d'une mesure en production le 2026-08-19 :
 * quatre-vingt-six numéros tronqués à l'import, fragments d'un découpage HTML
 * pris pour des numéros.
 */

describe('toE164 — ce qui doit être compris', () => {
  const same: Array<[string, string]> = [
    ['0612345678',        '+33612345678'],
    ['06 12 34 56 78',    '+33612345678'],
    ['06.12.34.56.78',    '+33612345678'],
    ['06-12-34-56-78',    '+33612345678'],
    ['+33612345678',      '+33612345678'],
    ['+33 6 12 34 56 78', '+33612345678'],
    ['+330612345678',     '+33612345678'],
    // Un fixe est un numéro comme un autre : un 06 n'est pas « plus valide »
    // qu'un 01.
    ['0120182536',        '+33120182536'],
    ['04 78 00 00 00',    '+33478000000'],
  ]
  for (const [input, expected] of same) {
    it(`« ${input} » → ${expected}`, () => expect(toE164(input)).toBe(expected))
  }

  it('rétablit le zéro initial perdu', () => {
    expect(toE164('607303702')).toBe('+33607303702')
    expect(toE164('744901422')).toBe('+33744901422')
  })

  it('laisse un numéro étranger intact', () => {
    expect(toE164('+41791234567')).toBe('+41791234567')
    expect(toE164('+1 415 555 0123')).toBe('+14155550123')
  })
})

describe('toE164 — ce qui doit être refusé', () => {
  for (const v of ['', '   ', '02', '06', '+33', '0690', '+3375951106', '12345', 'pas un numéro']) {
    it(`refuse ${JSON.stringify(v)}`, () => expect(toE164(v)).toBeNull())
  }
})

describe('formatPhone', () => {
  it('rend lisible un numéro français', () => expect(formatPhone('+33612345678')).toBe('06 12 34 56 78'))
  it('laisse l\'étranger tel quel', () => expect(formatPhone('+41791234567')).toBe('+41791234567'))
  it('ne casse pas sur le vide', () => expect(formatPhone(null)).toBe(''))
})
