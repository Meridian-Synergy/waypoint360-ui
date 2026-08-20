import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * La fenêtre de pagination est BORNÉE — c'est la raison d'être du composant.
 *
 * ⚠️ Vécu le 2026-08-20 : `/admin/organisations` rendait un bouton par page,
 * `v-for="p in totalPages"`. 43 boutons pour 1 053 organisations, et 200 le
 * jour où la base en compte 5 000. Une pagination qui grandit avec les données
 * ne pagine plus rien — et rien ne l'aurait signalé : elle « fonctionne ».
 *
 * On rejoue ici la logique de fenêtre plutôt que de monter le composant : ce
 * qui compte est la SUITE produite, et elle se raisonne sans navigateur.
 */

const GAP = '…'

/** Copie exacte de la logique du composant — la garde ci-dessous les compare. */
function fenetre(page: number, totalPages: number, siblings = 1): (number | string)[] {
  const total = Math.max(1, Math.floor(totalPages))
  const courante = Math.min(Math.max(1, Math.floor(page)), total)
  const s = Math.max(0, Math.floor(siblings))
  if (total <= s * 2 + 5) return Array.from({ length: total }, (_, i) => i + 1)
  const debut = Math.max(2, courante - s)
  const fin = Math.min(total - 1, courante + s)
  const out: (number | string)[] = [1]
  if (debut > 2) out.push(GAP)
  for (let p = debut; p <= fin; p++) out.push(p)
  if (fin < total - 1) out.push(GAP)
  out.push(total)
  return out
}

describe('la fenêtre de pagination est bornée', () => {
  it('ne grandit pas avec le nombre de pages', () => {
    // Le défaut d'origine, en une assertion : 43 pages ne font pas 43 entrées.
    const petite = fenetre(6, 43).length
    const enorme = fenetre(6, 5000).length
    expect(petite).toBe(enorme)
    expect(enorme).toBeLessThanOrEqual(9)
  })

  it('garde toujours la première et la dernière page atteignables', () => {
    for (const [p, t] of [[1, 43], [6, 43], [22, 43], [43, 43], [500, 5000]] as const) {
      const f = fenetre(p, t)
      expect(f[0], `page ${p}/${t}`).toBe(1)
      expect(f[f.length - 1], `page ${p}/${t}`).toBe(t)
    }
  })

  it('encadre la page courante de ses voisines', () => {
    expect(fenetre(22, 43)).toEqual([1, GAP, 21, 22, 23, GAP, 43])
  })

  it('n\'ouvre pas d\'ellipse au début quand il n\'y a rien à sauter', () => {
    expect(fenetre(1, 43)).toEqual([1, 2, GAP, 43])
    expect(fenetre(2, 43)).toEqual([1, 2, 3, GAP, 43])
  })

  it('ni à la fin', () => {
    expect(fenetre(43, 43)).toEqual([1, GAP, 42, 43])
  })

  it('ne remplace jamais UN seul numéro par une ellipse', () => {
    // Une ellipse à la place d'un numéro coûte un clic et n'économise rien.
    for (let total = 1; total <= 12; total++) {
      for (let p = 1; p <= total; p++) {
        const f = fenetre(p, total)
        const i = f.indexOf(GAP)
        if (i === -1) continue
        const avant = f[i - 1] as number
        const apres = f[i + 1] as number
        expect(apres - avant, `${p}/${total}`).toBeGreaterThan(1)
      }
    }
  })

  it('montre tout tant que tout tient', () => {
    expect(fenetre(2, 5)).toEqual([1, 2, 3, 4, 5])
    expect(fenetre(1, 1)).toEqual([1])
  })

  it('tolère une page hors bornes sans produire de suite absurde', () => {
    expect(fenetre(0, 43)[0]).toBe(1)
    expect(fenetre(99, 43)).toEqual([1, GAP, 42, 43])
  })
})

describe('le composant applique bien cette fenêtre', () => {
  const source = readFileSync(
    join(process.cwd(), 'src/components/WpPagination/WpPagination.vue'), 'utf8')

  it('la garde rejoue la logique du composant, elle ne la double pas', () => {
    // Si le composant change sa règle sans que la garde suive, les deux
    // divergent en silence — d'où cette comparaison textuelle des bornes.
    expect(source).toContain('total <= s * 2 + 5')
    expect(source).toContain('Math.max(2, courante - s)')
    expect(source).toContain('Math.min(total - 1, courante + s)')
  })

  it('ne rend rien pour une seule page', () => {
    expect(source).toContain('v-if="totalPages > 1"')
  })

  it('porte ses repères d\'accessibilité', () => {
    // Des `<button>` nus annoncent « 7 » sans dire de quoi.
    expect(source).toContain('<nav')
    expect(source).toContain(':aria-label="ariaLabel"')
    expect(source).toContain("aria-current=\"item === page ? 'page' : undefined\"")
    expect(source).toContain(':aria-label="nom(item as number)"')
  })

  it('remplace les numéros par un résumé sur petit écran, sans les cumuler', () => {
    const css = source.slice(source.indexOf('<style'))
    expect(css).toContain('.wp-pagination__summary { display: none; }')
    expect(css).toMatch(/@media \(max-width: 599px\)[\s\S]*\.wp-pagination__list \{ display: none; \}/)
  })
})

describe('WpDataTable — ce qu\'il expose, et ce qu\'il refuse', () => {
  const source = readFileSync(
    join(process.cwd(), 'src/components/WpDataTable/WpDataTable.vue'), 'utf8')

  it('permet de teinter une LIGNE entière', () => {
    // Une fiche retirée de l'annuaire s'estompe en entier ; ça ne s'exprime
    // pas dans une cellule.
    expect(source).toContain('rowClass?: (row: T, index: number)')
    expect(source).toContain(':class="rowClass?.(row, i)"')
  })

  it('n\'expose AUCUN clic de ligne', () => {
    // ⚠️ Un `<tr @click>` n'est atteignable qu'à la souris : ni tabulation, ni
    // Entrée, rien d'annoncé. Un composant partagé multiplierait ce défaut par
    // le nombre de ses usages. Le lien va dans une cellule, où c'est un lien.
    const tbody = source.slice(source.indexOf('<tbody>'), source.indexOf('</tbody>'))
    expect(tbody).not.toContain('@click')
    expect(source).not.toContain("'row-click'")
  })

  it('dit ce qu\'il n\'a rien à montrer plutôt que de rendre un tableau muet', () => {
    expect(source).toContain('v-else-if="!rows.length"')
    expect(source).toContain('emptyLabel')
  })
})

describe('WpDataTable — état vide et colonne d\'actions', () => {
  const source = readFileSync(
    join(process.cwd(), 'src/components/WpDataTable/WpDataTable.vue'), 'utf8')

  it('l\'état vide accepte plus qu\'une ligne', () => {
    // « Aucun document » ne suffit pas quand il faut aussi dire OÙ on les
    // fabrique. Un état vide muet renvoie chercher un bouton inexistant.
    expect(source).toContain('<slot name="empty">{{ emptyLabel }}</slot>')
  })

  it('les boutons d\'actions ne se touchent pas', () => {
    // Chaque page reposait sa propre règle d'écart : `.txt-r .btn + .btn`,
    // `.actions-cell { gap: 8px }`… trois copies pour un besoin universel.
    const css = source.slice(source.indexOf('<style'))
    expect(css).toMatch(/td\.wp-data-table__actions \{[^}]*gap: 8px/s)
  })
})
