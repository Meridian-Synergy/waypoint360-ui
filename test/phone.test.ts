import { describe, it, expect } from 'vitest'
import { toE164, formatPhone, phoneCountryMismatch } from '../src/utils/phone'

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

// ── Le pays, ajouté le 2026-08-24 ────────────────────────────────────────────
//
// ⚠️ VECTEURS IDENTIQUES à ceux de l'API, mot pour mot. C'est la discipline que
// l'en-tête du module décrit : deux copies d'une même règle divergent au premier
// correctif, et sur un numéro de téléphone la divergence est muette.

describe('toE164 et le pays', () => {
  /**
   * ⚠️ LE CAS FRONTALIER. Une société suisse a parfaitement le droit d'avoir un
   * numéro français. Un numéro déjà international passe donc intact, quel que
   * soit le pays de la fiche — le refuser serait inventer un problème.
   */
  it('laisse passer un numéro international quel que soit le pays', () => {
    expect(toE164('+33 6 12 34 56 78', 'CH')).toBe('+33612345678')
    expect(toE164('+41 79 123 45 67', 'FR')).toBe('+41791234567')
    expect(toE164('+34 644 365 879', 'PT')).toBe('+34644365879')
  })

  /**
   * ⚠️ LE DÉFAUT CORRIGÉ. Un format local ne porte aucun indicatif : la fonction
   * le devinait français et rendait un numéro appartenant à quelqu'un d'autre.
   * Ici, dans un FORMULAIRE : un Suisse tapant « 079… » obtenait un numéro
   * français, sans le voir.
   */
  it('n\'invente plus d\'indicatif français pour un numéro local étranger', () => {
    expect(toE164('079 123 45 67', 'CH')).toBeNull()
    expect(toE164('030 111 92 45', 'DE')).toBeNull()
    expect(toE164('644365879', 'ES')).toBeNull()
    expect(toE164('06 1234567', 'IT')).toBeNull()
  })

  it('garde le comportement français quand le pays est la France ou absent', () => {
    expect(toE164('06 12 34 56 78')).toBe('+33612345678')
    expect(toE164('06 12 34 56 78', 'FR')).toBe('+33612345678')
    expect(toE164('612345678', 'fr')).toBe('+33612345678')
  })
})

describe('discordance entre le numéro et le pays de la fiche', () => {
  it('se tait quand tout concorde', () => {
    expect(phoneCountryMismatch('+33612345678', 'FR')).toBeNull()
    expect(phoneCountryMismatch('+41791234567', 'CH')).toBeNull()
    // L'outre-mer est français : +262 sur une fiche FR n'est pas une anomalie.
    expect(phoneCountryMismatch('+262262599228', 'FR')).toBeNull()
  })

  it('signale un indicatif étranger sans jamais bloquer', () => {
    const m = phoneCountryMismatch('+19024420742', 'FR')
    expect(m).not.toBeNull()
    expect(m!.found).toBe('1')
    expect(m!.expected).toContain('33')
  })

  /** ⚠️ Du plus long au plus court : sinon `+351…` se lit comme `+35`. */
  it('lit correctement un indicatif à trois chiffres', () => {
    expect(phoneCountryMismatch('+351919771519', 'PT')).toBeNull()
    expect(phoneCountryMismatch('+351919771519', 'FR')).not.toBeNull()
  })

  it('se tait quand la question n\'a pas de sens', () => {
    expect(phoneCountryMismatch(null, 'FR')).toBeNull()
    expect(phoneCountryMismatch('+33612345678', null)).toBeNull()
    expect(phoneCountryMismatch('0612345678', 'FR')).toBeNull()
    expect(phoneCountryMismatch('+33612345678', 'XX')).toBeNull()
  })
})
