/**
 * La forme d'une adresse e-mail — une seule fois, pour tout le monde.
 *
 * ⚠️ VOLONTAIREMENT PERMISSIF. Une adresse valide au sens de la RFC 5322 peut
 * contenir des guillemets, des commentaires entre parenthèses et des caractères
 * qu'aucun formulaire ne verra jamais ; une expression qui prétend l'implémenter
 * fait plusieurs milliers de caractères et refuse quand même des adresses
 * légitimes. Le seul test qui compte ici est celui que l'utilisateur a raté :
 * une arobase, quelque chose devant, un domaine avec un point derrière.
 *
 * Refuser une adresse valide est PIRE que d'en accepter une douteuse : la
 * seconde échouera à l'envoi, avec un rebond qu'on peut voir. La première
 * empêche quelqu'un de s'inscrire, sans recours et sans trace.
 */
const FORME = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function isEmailShaped(valeur: string | null | undefined): boolean {
  const v = String(valeur ?? '').trim()
  return v.length > 0 && v.length <= 254 && FORME.test(v)
}

/** Normalise pour le stockage : espaces retirés, casse du domaine abaissée. */
export function normaliseEmail(valeur: string | null | undefined): string | null {
  const v = String(valeur ?? '').trim()
  if (!v) return null
  const at = v.lastIndexOf('@')
  if (at < 0) return v
  // ⚠️ Seul le DOMAINE est mis en minuscules. La partie locale est sensible à la
  // casse selon la RFC : `Jean.Dupont@` et `jean.dupont@` peuvent désigner deux
  // boîtes différentes. Peu de serveurs en usent, mais ce n'est pas à nous d'en
  // décider — abaisser la casse serait réécrire l'adresse de quelqu'un.
  return v.slice(0, at) + '@' + v.slice(at + 1).toLowerCase()
}
