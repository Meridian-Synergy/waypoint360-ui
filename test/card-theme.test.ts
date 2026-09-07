import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * ⛔ MÊME DÉFAUT QUE `WpShareButton`, DANS L'AUTRE SENS.
 *
 * `WpCard` posait son fond en `--wp-color-white`, une primitive. En thème
 * sombre, la carte restait donc blanche pendant que le texte de l'hôte passait
 * au blanc : on peignait du blanc sur du blanc. Mesuré le 2026-09-07 sur
 * `/organisation/mission-maps`, où deux titres de section avaient purement
 * disparu et où les zones de dépôt, elles correctes, s'affichaient en navy sur
 * cette carte blanche.
 *
 * ⚠️ POURQUOI NI LE STORYBOOK NI UN RENDU NE LE VOIENT. Le Storybook rend sur
 * fond clair, où blanc sur blanc n'existe pas : le défaut n'apparaît que chez
 * un consommateur dont la surface suit le thème du système. Un test qui
 * rendrait le composant serait vert, et faux.
 *
 * D'où un garde sur la SOURCE : une couleur figée à une primitive ne peut pas
 * suivre un thème, quel que soit le rendu.
 */
const SRC = readFileSync(
  join(process.cwd(), 'src', 'components', 'WpCard', 'WpCard.vue'),
  'utf-8',
)

/** Le bloc `<style>` sans ses commentaires : ils citent les jetons qu'on traque. */
function style(): string {
  return SRC.slice(SRC.indexOf('<style')).replace(/\/\*[\s\S]*?\*\//g, '')
}

/** La déclaration qui suit un sélecteur donné, pour ne pas confondre base et modificateur. */
function declaration(selecteur: string, propriete: string): string | undefined {
  const bloc = style().split(selecteur)[1]?.split('}')[0] ?? ''
  return new RegExp(`(?<!-)\\b${propriete}:\\s*([^;]+);`).exec(bloc)?.[1]?.trim()
}

describe('WpCard suit le thème de son hôte', () => {
  it('le fond part de --wp-color-surface', () => {
    const fond = declaration('.wp-card {', 'background')
    expect(fond, 'aucun fond trouvé — le style a changé de forme').toBeTruthy()
    expect(fond, 'une primitive figée ne peut pas suivre le thème de l’hôte')
      .toMatch(/var\(--wp-color-surface/)
  })

  /**
   * ⚠️ Le repli reste le blanc, et c'est voulu : la vitrine ne définit pas ce
   * jeton. Le perdre rendrait ses cartes transparentes.
   */
  it('le repli reste le blanc', () => {
    expect(declaration('.wp-card {', 'background')).toMatch(/#FFFFFF/i)
  })

  it('le titre part de --wp-color-text', () => {
    const couleur = declaration('.wp-card__title {', 'color')
    expect(couleur, 'aucune couleur de titre trouvée — le style a changé de forme').toBeTruthy()
    expect(couleur).toMatch(/var\(--wp-color-text/)
    expect(couleur, 'le repli navy sert la vitrine, qui n’a pas de thème').toMatch(/--wp-color-navy/)
  })

  /**
   * ⚠️ LE MODIFICATEUR `--dark` NE VEUT PAS DIRE « THÈME SOMBRE ». Il dit « je
   * suis posé sur une surface FONCÉE », un héros navy par exemple. Le confondre
   * avec le thème, c'est reproduire le défaut à l'envers.
   */
  it('le modificateur --dark existe toujours et reste distinct', () => {
    expect(SRC).toMatch(/wp-card--dark/)
    expect(declaration('.wp-card--dark {', 'background')).toMatch(/--wp-color-dark-bg/)
  })
})
