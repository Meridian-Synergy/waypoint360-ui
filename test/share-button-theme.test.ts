import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * ⛔ CE GARDE NAÎT D'UN DÉFAUT RÉEL, ET D'UN DÉFAUT INVISIBLE ICI.
 *
 * `WpShareButton` peignait son libellé en `--wp-color-navy` écrit en dur. En
 * thème sombre, `--wp-color-surface` EST ce navy : on peignait du navy sur du
 * navy. Le bouton restait là, avec sa bordure, cliquable — seul le TEXTE
 * disparaissait. Vu le 2026-08-30 sur la carte « Faites connaître votre
 * société » du tableau de bord.
 *
 * ⚠️ POURQUOI LE STORYBOOK NE POUVAIT PAS LE VOIR. Il rend sur un fond clair :
 * navy sur blanc est parfaitement lisible. Le défaut n'existe que chez un
 * consommateur dont la surface suit le thème du système. Un test qui se
 * contenterait de rendre le composant serait donc vert, et faux.
 *
 * D'où un garde sur la SOURCE : une couleur de texte fixée à une couleur de
 * marque ne peut pas suivre un thème, quel que soit le rendu.
 */
const SRC = readFileSync(
  join(process.cwd(), 'src', 'components', 'WpShareButton', 'WpShareButton.vue'),
  'utf-8',
)

/** Les déclarations `color:` du bloc `<style>`, sans les commentaires. */
function couleursDeTexte(): string[] {
  const style = SRC.slice(SRC.indexOf('<style'))
  const sansCommentaires = style.replace(/\/\*[\s\S]*?\*\//g, '')
  return [...sansCommentaires.matchAll(/(?<!-)\bcolor:\s*([^;]+);/g)].map(m => m[1]!.trim())
}

describe('WpShareButton suit le thème de son hôte', () => {
  it('le libellé au repos part de --wp-color-text', () => {
    const [premiere] = couleursDeTexte()
    expect(premiere, 'aucune couleur de texte trouvée — le style a changé de forme').toBeTruthy()
    expect(premiere, 'une couleur de marque en dur ne peut pas suivre le thème de l’hôte')
      .toMatch(/var\(--wp-color-text/)
  })

  /**
   * ⚠️ Le repli garde le navy, et c'est voulu : la vitrine n'a pas de thème
   * sombre et ne définit pas forcément les jetons. Le perdre rendrait le texte
   * noir par défaut là où il doit rester navy.
   */
  it('le repli reste le navy de la marque', () => {
    const [premiere] = couleursDeTexte()
    expect(premiere).toMatch(/--wp-color-navy/)
  })

  /**
   * ⚠️ LE MODIFICATEUR `--dark` NE VEUT PAS DIRE « THÈME SOMBRE ». Il dit « je
   * suis posé sur une surface FONCÉE », par exemple un pied de page navy sur la
   * vitrine claire. Le confondre avec le thème, c'est reproduire le défaut à
   * l'envers : un bouton blanc sur blanc.
   */
  it('le modificateur --dark existe toujours et reste distinct', () => {
    expect(SRC).toMatch(/wp-share-button--dark/)
  })
})
