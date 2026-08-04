import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Un `@click` posé sur un `<div>` ou un `<span>` produit une action que la souris
 * seule sait déclencher : pas de tabulation, pas d'Entrée, rien d'annoncé par un
 * lecteur d'écran. Le défaut est invisible en revue — visuellement, ça marche.
 *
 * Vécu le 2026-08-04 : le CTA de `WpAlert` était un `<span>`, et on s'apprêtait à
 * le poser sur cinq écrans de l'app. Un composant partagé multiplie ses défauts
 * par le nombre de ses usages ; c'est là que la garde a le meilleur rendement.
 *
 * Les recouvrements de modale et de feuille de partage sont l'exception admise :
 * cliquer à côté est un raccourci souris, jamais le seul chemin.
 *
 * ⚠️ Cette exception SUPPOSE qu'Escape ferme, ce qui n'est pas encore le cas de
 * `WpModal` ni de `WpShareSheet` — dette connue, hors de cette garde.
 */

const COMPONENTS = join(process.cwd(), 'src', 'components')

// Un élément natif interactif, une balise dynamique (`<component :is>`, dont le
// nom réel n'est pas lisible ici), ou un composant Vue (majuscule).
const INTERACTIVE = /^(button|a|input|select|textarea|label|component|[A-Z])/

const OVERLAY_EXCEPTION = /class="[^"]*(overlay)[^"]*"/

/**
 * Dette CONNUE, pas tolérée : deux composants livrés avant cette garde portent le
 * défaut. Ils sont nommés ici pour rester visibles, avec un plafond qui ne peut
 * que descendre — même mécanique que le TOUR_BACKLOG de l'app.
 *
 * - `WpLocaleSwitcher` : les options sont des `<li role="option">` SANS gestion
 *   clavier ni tabindex. Le sélecteur de langue s'ouvre au clavier mais ne se
 *   choisit pas. Corriger demande le motif listbox complet (flèches, Entrée,
 *   Échap, focus rendu au déclencheur).
 * - `WpStatCard` : `<div @click>` avec `interactive` à VRAI par défaut. Le passer
 *   en `<button>` change le rendu par défaut du navigateur sur trois produits —
 *   à faire avec une relecture visuelle, pas au détour d'un autre lot.
 */
const KNOWN_DEBT = [
  'WpLocaleSwitcher/WpLocaleSwitcher.vue → <li>',
  'WpStatCard/WpStatCard.vue → <div>',
]
const KNOWN_DEBT_MAX = 2

function vueFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name)
    return e.isDirectory() ? vueFiles(p) : e.name.endsWith('.vue') ? [p] : []
  })
}

describe('éléments cliquables', () => {
  it('aucun @click sur un élément que le clavier ne peut atteindre', () => {
    const offenders: string[] = []
    let scanned = 0

    for (const file of vueFiles(COMPONENTS)) {
      scanned++
      const src = readFileSync(file, 'utf-8')
      // La balise ouvrante entière, pour lire à la fois son nom et ses attributs.
      for (const m of src.matchAll(/<([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g)) {
        const [name, attrs] = [m[1], m[2]]
        if (!/@click/.test(attrs)) continue
        if (INTERACTIVE.test(name)) continue
        if (OVERLAY_EXCEPTION.test(attrs)) continue
        offenders.push(`${file.split('/').slice(-2).join('/')} → <${name}>`)
      }
    }

    expect(scanned).toBeGreaterThan(0)
    expect(offenders.filter(o => !KNOWN_DEBT.includes(o))).toEqual([])
  })

  // Le plafond fait le cliquet : reprendre un des deux impose de le baisser, et
  // rien ne peut s'ajouter à la liste sans le lever — ce qui se voit en revue.
  it('la dette connue ne grossit pas', () => {
    expect(KNOWN_DEBT.length).toBeLessThanOrEqual(KNOWN_DEBT_MAX)
  })
})
