import { describe, it, expect } from 'vitest'
import { resoudreConsentement, nouveauConsentement, estValide, WP_CONSENT_TTL_MS } from '../src/utils/consent'

/**
 * LA REPRISE DU CONSENTEMENT SANS RIEN REDEMANDER.
 *
 * Ce garde tient des décisions, pas des détails : chacune a été prise en
 * connaissance de cause et coûterait cher à redécouvrir.
 *
 * Cf. `waypoint360-docs/WAYPOINT360_GOOGLE_ADS_CADRAGE.md` §7.
 */

const T = 1_800_000_000_000
const futur = T + WP_CONSENT_TTL_MS
const passe  = T - 1000

describe('reprise du consentement', () => {
  it('n’invente rien quand aucun choix n’existe', () => {
    expect(resoudreConsentement({ maintenant: T })).toBeNull()
  })

  it('reprend le choix de la vitrine seul', () => {
    const r = resoudreConsentement({ ancienWeb: { analytics: true, expires: futur }, maintenant: T })
    expect(r?.analytics).toBe(true)
  })

  it('reprend le choix de l’app seul', () => {
    expect(resoudreConsentement({ ancienApp: 'granted', maintenant: T })?.analytics).toBe(true)
    expect(resoudreConsentement({ ancienApp: 'denied',  maintenant: T })?.analytics).toBe(false)
  })

  /**
   * ⛔ DÉCISION DE DENIS, 2026-09-07 : en cas de divergence, l'ACCEPTATION
   * l'emporte. Le choix app n'est pas datable, donc la règle chronologique —
   * la seule juste — est inapplicable entre les deux anciens formats.
   */
  it('privilégie l’acceptation quand les deux divergent', () => {
    expect(resoudreConsentement({
      ancienWeb: { analytics: true, expires: futur }, ancienApp: 'denied', maintenant: T,
    })?.analytics).toBe(true)

    expect(resoudreConsentement({
      ancienWeb: { analytics: false, expires: futur }, ancienApp: 'granted', maintenant: T,
    })?.analytics).toBe(true)
  })

  it('respecte un refus exprimé des deux côtés', () => {
    expect(resoudreConsentement({
      ancienWeb: { analytics: false, expires: futur }, ancienApp: 'denied', maintenant: T,
    })?.analytics).toBe(false)
  })

  /**
   * ⚠️ UN CHOIX EXPIRÉ VAUT ABSENCE DE CHOIX. Le reprendre prolongerait un
   * consentement que la personne n'a pas renouvelé — et la bannière doit
   * reparaître, ce que `null` déclenche.
   */
  it('ne reprend pas un choix expiré', () => {
    expect(resoudreConsentement({
      ancienWeb: { analytics: true, expires: passe }, maintenant: T,
    })).toBeNull()
  })

  /**
   * ⚠️ L'EXPIRATION D'ORIGINE EST CONSERVÉE. La recalculer à chaque visite
   * prolongerait indéfiniment un consentement de six mois, sans que la personne
   * ne soit jamais réinterrogée.
   */
  it('garde l’expiration d’origine plutôt que de la repousser', () => {
    const r = resoudreConsentement({ ancienWeb: { analytics: true, expires: T + 1000 }, maintenant: T })
    expect(r?.expires).toBe(T + 1000)
  })

  it('le format unifié fait foi dès qu’il existe', () => {
    const r = resoudreConsentement({
      nouveau: { analytics: false, decidedAt: T, expires: futur },
      ancienWeb: { analytics: true, expires: futur }, ancienApp: 'granted', maintenant: T,
    })
    expect(r?.analytics).toBe(false)
  })

  it('ignore un format unifié expiré et retombe sur les anciens', () => {
    const r = resoudreConsentement({
      nouveau: { analytics: false, decidedAt: passe, expires: passe },
      ancienApp: 'granted', maintenant: T,
    })
    expect(r?.analytics).toBe(true)
  })
})

describe('création et validité', () => {
  it('date le choix, pas seulement son expiration', () => {
    const c = nouveauConsentement(true, T)
    expect(c.decidedAt).toBe(T)
    expect(c.expires).toBe(T + WP_CONSENT_TTL_MS)
  })

  it('un consentement échu n’est plus valide', () => {
    expect(estValide({ analytics: true, decidedAt: passe, expires: passe }, T)).toBe(false)
    expect(estValide(null, T)).toBe(false)
  })
})
