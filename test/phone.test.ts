import { describe, it, expect } from 'vitest'
import { toE164, formatPhone, phoneCountryMismatch, exempleInternational } from '../src/utils/phone'

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
  it('n\'invente jamais d\'indicatif français pour un numéro local étranger', () => {
    for (const [v, pays] of [['079 123 45 67', 'CH'], ['030 111 92 45', 'DE'], ['644365879', 'ES'], ['06 1234567', 'IT']]) {
      expect(toE164(v, pays) ?? '').not.toMatch(/^\+33/)
    }
  })
})

// ── Les formes locales sans ambiguïté, ajoutées le 2026-09-27 ────────────────
//
// ⛔ LE DÉFAUT VÉCU : « 936555555 », copié depuis le site d'une société de
// Barcelone, devenait `+33936555555`, un numéro français qui n'existe pas. Le
// champ ne savait pas lire une forme locale espagnole et retombait sur la
// France. Le numéro réel est `+34936555555`.
//
// ⚠️ VECTEURS IDENTIQUES à ceux de l'API, mot pour mot.

describe('toE164 — formes locales lues sans deviner', () => {
  const lues: Array<[string, string, string]> = [
    // Espagne : neuf chiffres, pas de zéro de transit.
    ['936555555',       'ES', '+34936555555'],
    ['936 55 55 55',    'ES', '+34936555555'],
    ['644365879',       'ES', '+34644365879'],
    // Suisse et Pays-Bas : zéro de transit, neuf chiffres derrière.
    ['079 123 45 67',   'CH', '+41791234567'],
    ['044 668 18 00',   'CH', '+41446681800'],
    ['020 123 4567',    'NL', '+31201234567'],
    ['06 12345678',     'NL', '+31612345678'],
    // Belgique : huit chiffres pour un fixe, neuf pour un mobile.
    ['02 123 45 67',    'BE', '+3221234567'],
    ['0475 12 34 56',   'BE', '+32475123456'],
    // ⚠️ Un fixe de Liège commence AUSSI par 4 : c'est la longueur qui tranche.
    ['04 123 45 67',    'BE', '+3241234567'],
    // Allemagne : longueur variable, le zéro de transit tombe.
    ['030 111 92 45',   'DE', '+49301119245'],
    ['0151 23456789',   'DE', '+4915123456789'],
    ['089 12345',       'DE', '+498912345'],
    // Le code pays s'écrit en minuscules aussi.
    ['936555555',       'es', '+34936555555'],
  ]
  for (const [v, pays, attendu] of lues) {
    it(`« ${v} » en ${pays} → ${attendu}`, () => expect(toE164(v, pays)).toBe(attendu))
  }

  /**
   * ⚠️ LE ZÉRO DE TRANSIT EST EXIGÉ là où le plan en a un. Neuf chiffres
   * allemands sans zéro peuvent être un numéro d'abonné privé de son indicatif
   * de zone : les lire fabriquerait le numéro de quelqu'un d'autre. Seule la
   * France rétablit un zéro perdu, parce que cette perte a été MESURÉE dans nos
   * imports, et que le résultat y est vérifié.
   */
  const refusees: Array<[string, string]> = [
    ['791234567',     'CH'],   // zéro de transit absent
    ['301119245',     'DE'],
    ['201234567',     'NL'],
    ['0936555555',    'ES'],   // l'Espagne n'a PAS de zéro de transit
    ['536555555',     'ES'],   // aucun numéro espagnol ne commence par 5
    ['93655555',      'ES'],   // huit chiffres
    ['044 668 18 0',  'CH'],   // huit chiffres derrière le zéro
    ['0412345678',    'BE'],   // neuf chiffres commençant par 41 : ni fixe, ni mobile
    ['030 1',         'DE'],   // trop court
    // ⛔ L'Italie GARDE son zéro dans la forme internationale et ses longueurs
    // varient : aucune règle ne lit `06 1234567` sans deviner.
    ['06 1234567',    'IT'],
    ['333 1234567',   'IT'],
    // Un pays hors de la table reste refusé, comme avant.
    ['0123456789',    'AT'],
  ]
  for (const [v, pays] of refusees) {
    it(`refuse « ${v} » en ${pays}`, () => expect(toE164(v, pays)).toBeNull())
  }

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

// ── L'exemple affiché dans le champ, ajouté le 2026-09-27 ────────────────────
describe('exempleInternational', () => {
  it('donne la forme internationale du pays de la fiche', () => {
    expect(exempleInternational('FR')).toBe('+33 6 12 34 56 78')
    expect(exempleInternational('ch')).toBe('+41 79 123 45 67')
    expect(exempleInternational('ES')).toBe('+34 612 34 56 78')
  })

  // ⛔ Plus jamais la forme locale française, qui s'affichait partout.
  it('ne propose jamais une forme locale', () => {
    for (const c of ['FR', 'BE', 'CH', 'DE', 'NL', 'ES', 'IT', 'PT', 'LU', 'GB', 'IE', 'AT', 'US', 'DK', null]) {
      expect(exempleInternational(c), String(c)).toMatch(/^\+\d/)
    }
  })

  // L'exemple doit être un numéro que le champ accepte : sinon il enseigne une
  // saisie refusée.
  it('chaque exemple est lui-même un numéro valide', () => {
    for (const c of ['FR', 'BE', 'CH', 'LU', 'DE', 'NL', 'ES', 'IT', 'PT', 'GB', 'IE', 'AT']) {
      expect(toE164(exempleInternational(c), c), c).not.toBeNull()
    }
  })

  // ⛔ Le Danemark recevait l'exemple français : sa ligne manquait, et le repli
  // allait à la France.
  it('un pays proposé par l’app a son propre indicatif, jamais le +33', () => {
    const APP = ['FR', 'BE', 'LU', 'DE', 'CH', 'NL', 'ES', 'IT', 'PT', 'GB', 'IE', 'AT',
      'DK', 'SE', 'NO', 'FI', 'PL', 'CZ', 'SK', 'HU', 'RO', 'BG', 'HR', 'SI',
      'GR', 'EE', 'LV', 'LT', 'MT', 'CY', 'IS', 'LI', 'US', 'CA']
    for (const c of APP.filter(c => c !== 'FR')) {
      expect(exempleInternational(c), c).not.toMatch(/^\+33\b/)
      expect(toE164(exempleInternational(c), c), c).not.toBeNull()
    }
  })

  it('sans pays, la France ; pays inconnu, un « + » nu', () => {
    expect(exempleInternational(null)).toBe('+33 6 12 34 56 78')
    expect(exempleInternational('')).toBe('+33 6 12 34 56 78')
    expect(exempleInternational('XX')).toBe('+…')
  })
})
