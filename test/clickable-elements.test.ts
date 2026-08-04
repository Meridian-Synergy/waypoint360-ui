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
 * Un rôle ARIA interactif explicite est un chemin clavier LÉGITIME, à condition
 * que son conteneur gère les touches — c'est le motif listbox : les options ne
 * sont pas des boutons, le clavier est piloté par la liste qui porte le focus et
 * `aria-activedescendant`. Cette garde lit des fichiers, elle ne peut pas vérifier
 * cette condition ; elle fait confiance au rôle et laisse le composant en
 * répondre.
 */
const ARIA_INTERACTIVE_ROLE = /role="(option|menuitem|menuitemradio|menuitemcheckbox|tab|button|link|switch|treeitem)"/

/**
 * Dette CONNUE, pas tolérée. Vide depuis le 2026-08-04 : `WpLocaleSwitcher` a reçu
 * le motif listbox complet, et `WpStatCard` a perdu son `@click` mort (la tuile
 * n'a jamais été l'élément interactif — c'est le lien qui l'enveloppe).
 *
 * Le plafond à zéro fait le cliquet : rien ne peut s'y ajouter sans le lever, ce
 * qui se voit en revue.
 */
const KNOWN_DEBT: string[] = []
const KNOWN_DEBT_MAX = 0

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
        if (ARIA_INTERACTIVE_ROLE.test(attrs)) continue
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
