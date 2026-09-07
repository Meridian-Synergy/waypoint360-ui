/**
 * Consentement aux cookies — état partagé entre la vitrine et l'application.
 *
 * ⛔ POURQUOI CE FICHIER VIT DANS LE DS. La vitrine et l'app avaient chacune sa
 * bannière et son stockage, incompatibles : `localStorage` `wp360_consent`
 * (objet daté) d'un côté, cookie `wp360-consent` (`'granted'`/`'denied'`) de
 * l'autre. Mesuré en production le 2026-09-07 : un visiteur ayant consenti sur
 * `waypoint360.eu` arrivait sur `app.waypoint360.eu` SANS aucun cookie GA, et
 * revoyait la bannière juste avant de créer son compte. Le `localStorage` n'est
 * pas partagé entre sous-domaines, contrairement à un cookie de domaine parent.
 *
 * Deux implémentations jumelles auraient reproduit la divergence qu'on corrige.
 * C'est la même leçon que `pilot-name.ts`, dont le commentaire dit déjà : « le
 * défaut d'origine ÉTAIT la divergence entre les deux ».
 *
 * Cf. `waypoint360-docs/WAYPOINT360_GOOGLE_ADS_CADRAGE.md` §7.
 */

/**
 * ⚠️ NOUVEAU NOM, ET CE N'EST PAS COSMÉTIQUE. Le cookie de l'app est *host-only*
 * (aucun `domain` déclaré), donc lié à `app.waypoint360.eu`. Réutiliser son nom
 * pour un cookie de domaine parent ferait coexister les deux : le navigateur les
 * enverrait TOUS LES DEUX, et `document.cookie` ne dit pas lequel est lequel.
 * Le consentement basculerait selon l'ordre d'envoi, sans rien pour l'expliquer.
 */
export const WP_CONSENT_COOKIE = 'wp360_consent_v2'

/** Six mois : le plus court des deux TTL d'origine (l'app tenait 395 jours). */
export const WP_CONSENT_TTL_MS = 6 * 30 * 24 * 60 * 60 * 1000

export interface WpConsent {
  analytics: boolean
  /** Date du CHOIX, pas de son expiration — voir `resoudreConsentement`. */
  decidedAt: number
  expires: number
}

/** L'ancien format de la vitrine : `localStorage`, sans date de choix. */
export interface AncienConsentWeb { analytics: boolean; expires: number }

export function nouveauConsentement(analytics: boolean, maintenant = Date.now()): WpConsent {
  return { analytics, decidedAt: maintenant, expires: maintenant + WP_CONSENT_TTL_MS }
}

export function estValide(c: WpConsent | null, maintenant = Date.now()): boolean {
  return !!c && c.expires > maintenant
}

/**
 * Reprend un choix déjà exprimé, sans rien redemander.
 *
 * @param nouveau  le cookie unifié, s'il existe déjà
 * @param ancienWeb  `localStorage` de la vitrine (`{ analytics, expires }`)
 * @param ancienApp  cookie de l'app (`'granted'` | `'denied'`)
 *
 * ⚠️ LE CHOIX APP N'EST PAS DATABLE. Le cookie ne porte que `'granted'` ou
 * `'denied'` ; `document.cookie` ne rend jamais l'expiration, et le serveur ne
 * la reçoit pas non plus. La règle chronologique — la seule juste, le
 * consentement étant un acte daté et révocable — est donc inapplicable entre les
 * deux anciens formats.
 *
 * ⛔ EN CAS DE DIVERGENCE, L'ACCEPTATION L'EMPORTE. Décision de Denis le
 * 2026-09-07, prise en connaissance de cause : aucune obligation n'impose
 * l'inverse, et le cas suppose d'avoir répondu aux deux bannières
 * différemment, ce qui est rare.
 *
 * ⚠️ Ce que cela implique, écrit ici pour que personne ne le redécouvre : dans
 * l'ordre « accepté sur la vitrine PUIS refusé sur l'app », la reprise réactive
 * un consentement retiré. L'ordre inverse ne pose aucun problème. Le nouveau
 * format porte `decidedAt` précisément pour que ce cas n'existe plus à l'avenir.
 */
export function resoudreConsentement(opts: {
  nouveau?: WpConsent | null
  ancienWeb?: AncienConsentWeb | null
  ancienApp?: 'granted' | 'denied' | null
  maintenant?: number
}): WpConsent | null {
  const maintenant = opts.maintenant ?? Date.now()

  // Le format unifié fait foi dès qu'il existe et n'a pas expiré.
  if (estValide(opts.nouveau ?? null, maintenant)) return opts.nouveau!

  // ⚠️ Un ancien choix EXPIRÉ ne se reprend pas : il vaut absence de choix, et
  // la bannière doit reparaître. Le reprendre prolongerait un consentement que
  // la personne n'a pas renouvelé.
  const web = opts.ancienWeb && opts.ancienWeb.expires > maintenant ? opts.ancienWeb : null
  const app = opts.ancienApp ?? null
  if (!web && !app) return null

  const analytics = web && app
    ? web.analytics || app === 'granted'   // divergence : l'acceptation l'emporte
    : web ? web.analytics : app === 'granted'

  // `decidedAt` vaut la reprise, pas le choix d'origine : on ne connaît pas sa
  // date. L'expiration, elle, reste celle du web quand on l'a — sinon on
  // prolongerait un consentement de six mois à chaque visite.
  return {
    analytics,
    decidedAt: maintenant,
    expires: web ? web.expires : maintenant + WP_CONSENT_TTL_MS,
  }
}
