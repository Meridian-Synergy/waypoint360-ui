import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * ⛔ CE QUI FAIT LA VALEUR DU PANNEAU, C'EST LA CONSÉQUENCE.
 *
 * L'application confirmait une suppression de trois façons : ce panneau, une
 * étiquette rouge qui n'expliquait rien, et le `window.confirm` natif du
 * navigateur. La boîte native est bloquante, son bouton n'est pas traduit, elle
 * ne se style pas — mais son vrai défaut est ailleurs : elle ne sait pas dire ce
 * que la suppression entraîne, ni ce qui peut l'empêcher.
 *
 * Rendre `consequence` facultatif remettrait ce défaut dans le composant censé
 * le corriger, et personne ne le verrait : le panneau s'afficherait, joliment,
 * en ne disant rien.
 */
const SOURCE = readFileSync(
  join(process.cwd(), 'src', 'components', 'WpDeleteConfirm', 'WpDeleteConfirm.vue'),
  'utf-8',
)

describe('WpDeleteConfirm', () => {
  it('exige une conséquence, elle ne peut pas être omise', () => {
    // Pas de `?` après le nom, donc pas de prop facultative.
    expect(SOURCE).toMatch(/^\s*consequence:\s+string$/m)
    expect(SOURCE).not.toMatch(/consequence\?:/)
  })

  it('exige un titre qui nomme la cible', () => {
    expect(SOURCE).toMatch(/^\s*title:\s+string$/m)
  })

  // Le bouton qui détruit doit se voir comme tel : `danger`, jamais `primary`.
  it('rend le bouton de confirmation en variante danger', () => {
    expect(SOURCE).toMatch(/variant="danger"/)
  })

  // ⚠️ Un refus arrivé APRÈS le clic n'est annoncé à personne sans `role="alert"`,
  // et c'est précisément le moment où l'on regarde ailleurs.
  it('annonce le refus de l’API aux lecteurs d’écran', () => {
    expect(SOURCE).toMatch(/class="wp-delete-confirm__error"[^>]*role="alert"/)
  })

  // ⛔ Deux actions, et une seule détruit : l'annulation doit exister.
  it('offre toujours une sortie', () => {
    expect(SOURCE).toMatch(/emit\('cancel'\)/)
  })
})
