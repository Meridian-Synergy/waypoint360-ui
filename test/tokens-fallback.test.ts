import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Un `var(--wp-…)` sans repli ne casse RIEN chez nous : le Storybook importe
 * `tokens.css`, donc tout s'affiche. Il casse chez le consommateur qui ne les
 * importe pas — sans erreur, sans avertissement, juste un rendu dégradé qu'on
 * met sur le compte du design.
 *
 * Vécu le 2026-08-02 : `waypoint360-app` était le seul des trois produits à ne
 * pas importer les jetons. `WpModal` s'affichait titre collé au bord et boutons
 * dans l'angle, et 150 occurrences attendaient de produire le même effet
 * ailleurs.
 *
 * Importer les jetons reste la vraie solution. Ce test est le filet : sans lui,
 * la dette se reconstitue au premier composant écrit.
 */

const COMPONENTS = join(process.cwd(), 'src', 'components')

function vueFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name)
    return e.isDirectory() ? vueFiles(p) : e.name.endsWith('.vue') ? [p] : []
  })
}

describe('jetons du design system', () => {
  it('aucun var(--wp-…) sans valeur de repli', () => {
    const offenders: string[] = []
    let scanned = 0

    for (const file of vueFiles(COMPONENTS)) {
      scanned++
      const src = readFileSync(file, 'utf-8')
      for (const m of src.matchAll(/var\(--wp-[a-z0-9-]+\)/g)) {
        offenders.push(`${file.split('/').slice(-2).join('/')} → ${m[0]}`)
      }
    }

    // Sans ce plancher, un changement d'arborescence ferait passer le test à
    // vide : vert parce qu'il n'inspecte plus rien.
    expect(scanned, 'aucun composant inspecté : le chemin ne colle plus').toBeGreaterThan(20)
    expect(offenders, 'jetons sans repli — invisibles ici, cassants chez le consommateur').toEqual([])
  })
})
