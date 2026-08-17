/**
 * Niveau d'un compteur de caractères.
 *
 * ⚠️ Un `maxlength` s'atteint EN SILENCE : le navigateur cesse d'accepter les
 * frappes, sans rien dire. L'utilisateur croit que son clavier a lâché, ou ne
 * voit pas que sa phrase a été coupée. Constaté le 2026-08-17 sur la
 * description d'un profil public, arrêtée net à 500/500.
 *
 * La couleur seule ne suffit pas — elle échoue au critère WCAG 1.4.1 et
 * n'existe pas pour un lecteur d'écran. Le palier haut s'accompagne donc d'un
 * texte, que le consommateur fournit dans sa langue.
 */
export type WpCharCountLevel = 'ok' | 'warn' | 'max'

/** À partir de 80 % du quota : assez tôt pour reformuler. */
export const WP_CHAR_WARN_RATIO = 0.8

export function wpCharCountLevel(length: number, max: number): WpCharCountLevel {
  if (max <= 0) return 'ok'
  if (length >= max) return 'max'
  return length / max >= WP_CHAR_WARN_RATIO ? 'warn' : 'ok'
}
