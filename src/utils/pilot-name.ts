/**
 * Le nom d'un pilote, et ses initiales.
 *
 * L'API renvoie l'un OU l'autre : quand un pseudonyme est posé, l'état civil
 * revient à `null`. `first_name` et `last_name` sont donc nullables — le type de
 * la carte de partage prétendait le contraire, et un `.charAt(0)` sur `null`
 * rendait un 500 sur la seule fiche pilote publique en production.
 *
 * ⚠️ Les initiales se dérivent du nom AFFICHÉ, jamais de l'état civil. Les tirer
 * du prénom et du nom rendrait « DG » à côté de « Denis58 » : la carte publierait
 * exactement ce que le pseudonyme sert à masquer. Un correctif qui se contente de
 * ne plus planter fabriquerait cette fuite.
 *
 * Une seule maison, parce que le défaut d'origine EST la divergence : la page
 * `/pilote/[slug]` traitait déjà le pseudonyme, la carte de partage ne l'avait
 * jamais appris. Deux copies de la même règle finissent toujours par différer.
 *
 * ⚠️ Remontée ici depuis la vitrine le 2026-08-19, parce que la divergence avait
 * recommencé — d'un DÉPÔT à l'autre cette fois. La page pilote de l'application
 * (`app.waypoint360.eu/public/pilote/…`) typait encore `first_name` comme une
 * chaîne et appelait `.charAt(0)` dessus : écran BLANC et titre « null null » sur
 * la seule fiche pilote publique en production. La vitrine, elle, servait la même
 * fiche correctement. Le design system est le seul endroit que les deux voient.
 */
export interface NamedPilot {
  pseudonym?:  string | null
  first_name?: string | null
  last_name?:  string | null
}

export function pilotDisplayName(p: NamedPilot | null | undefined): string {
  if (!p) return ''
  return p.pseudonym?.trim() || `${p.first_name ?? ''} ${p.last_name ?? ''}`.trim()
}

/** Deux lettres au plus, tirées du nom affiché. `?` plutôt que du vide. */
export function pilotInitials(p: NamedPilot | null | undefined): string {
  return pilotDisplayName(p)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => [...w][0] ?? '')
    .join('')
    .toUpperCase() || '?'
}
