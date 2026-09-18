import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * ⛔ DEUX ENTRÉES POUR UNE ORGANISATION, SANS QUOI LA BASCULE N'EXISTE PAS.
 *
 * Un professionnel qui achète des prestations a UNE organisation et deux
 * casquettes. Tant que ce sélecteur a identifié une entrée par `orgId`, les deux
 * lignes étaient le même bouton : cliquer « Client » ne changeait rien. C'est ce
 * qui avait conduit, le 2026-09-17, à créer une SECONDE organisation pour
 * l'achat — du même nom que la première, et proposée à la fusion par l'écran
 * d'annuaire.
 *
 * ⚠️ LES COMMENTAIRES SONT RETIRÉS AVANT LA RECHERCHE. Ils citent le code
 * qu'on cherche : les laisser ferait passer ce garde au vert sur sa propre prose.
 */
const BRUT = readFileSync(
  join(process.cwd(), 'src', 'components', 'WpContextSwitcher', 'WpContextSwitcher.vue'),
  'utf-8',
)
const SOURCE = BRUT.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')

describe('WpContextSwitcher — l’usage distingue deux entrées', () => {
  it('identifie une entrée par l’organisation ET l’usage', () => {
    expect(SOURCE, 'la clé de liste est encore l’organisation seule').not.toMatch(/:key="ctx\.orgId"/)
    expect(SOURCE).toMatch(/\$\{ctx\.orgId\}::\$\{ctx\.intention/)
  })

  it('rend l’usage à qui écoute la sélection', () => {
    expect(SOURCE).toMatch(/emit\('select',\s*ctx\.orgId,\s*ctx\.intention\)/)
    expect(SOURCE).toMatch(/select:\s*\[orgId: string, intention\?: string\]/)
  })

  /**
   * ⚠️ AVEC UNE SEULE ORGANISATION, SON NOM NE DISTINGUE RIEN — et le cadrage
   * demande qu'il disparaisse. Le répéter sous un intitulé d'usage donnerait
   * deux fois le même mot, la seule information utile reléguée en titre de
   * groupe.
   */
  it('efface le nom de l’organisation quand il n’y en a qu’une', () => {
    expect(SOURCE).toMatch(/new Set\(props\.contexts\.map\(c => c\.orgId\)\)\.size <= 1/)
    expect(SOURCE, 'le titre de groupe s’affiche encore sans condition')
      .toMatch(/<p v-if="!uneSeuleOrganisation"/)
    expect(SOURCE, 'la ligne affiche encore le nom brut').not.toMatch(/>\s*\{\{ ctx\.name \}\}/)
  })

  /** ⚠️ Et l'entrée active se reconnaît sur les deux, sinon les deux s'allument. */
  it('marque active l’entrée qui correspond aux deux', () => {
    expect(SOURCE).toMatch(/ctx\.intention === props\.activeIntention/)
    expect(SOURCE).not.toMatch(/aria-selected="ctx\.orgId === activeOrgId"/)
  })
})
