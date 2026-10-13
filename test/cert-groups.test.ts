import { describe, it, expect } from 'vitest'
import { certRenderItems, type WpCertGroup } from '../src/components/WpCertifications/certGroups'

const GROUPS: WpCertGroup[] = [
  { id: 'easa', title: 'Europe — EASA', hint: 'Valid in all EASA states', labels: { a1_a3: 'A1/A3', a2_cofc: 'A2 CofC' } },
  { id: 'faa', title: 'United States — FAA', labels: { part_107: 'Part 107' }, collapsed: true },
  { id: 'tc', title: 'Canada — Transport Canada', labels: { tc_basic: 'TC Basic' }, collapsed: true },
  { id: 'trade', title: 'Trade permits (France)', labels: { certiphyto: 'Certiphyto' } },
]
const none = () => false
const kinds = (xs: ReturnType<typeof certRenderItems>) => xs.map(x => x.kind === 'row' ? x.key : x.kind === 'title' ? `# ${x.text}` : '[toggle]')

describe('certification groups by authority', () => {
  it('shows unfolded groups in the given order, then one toggle for the folded ones', () => {
    expect(kinds(certRenderItems(GROUPS, none, false))).toEqual([
      '# Europe — EASA', 'a1_a3', 'a2_cofc', '# Trade permits (France)', 'certiphyto', '[toggle]',
    ])
  })

  it('unfolds every folded group once expanded, without a toggle', () => {
    expect(kinds(certRenderItems(GROUPS, none, true))).toEqual([
      '# Europe — EASA', 'a1_a3', 'a2_cofc', '# Trade permits (France)', 'certiphyto',
      '# United States — FAA', 'part_107', '# Canada — Transport Canada', 'tc_basic',
    ])
  })

  // A Part 107 someone holds must never disappear behind « other countries ».
  it('never hides a held title: a held folded title unfolds its groups', () => {
    const items = certRenderItems(GROUPS, k => k === 'part_107', false)
    expect(kinds(items)).toContain('part_107')
    expect(kinds(items)).not.toContain('[toggle]')
  })

  it('carries the heading hint and skips empty groups', () => {
    const items = certRenderItems([...GROUPS, { id: 'empty', title: 'Nothing', labels: {} }], none, true)
    expect(items.find(i => i.kind === 'title' && i.id === 'title-easa')).toMatchObject({ hint: 'Valid in all EASA states' })
    expect(kinds(items)).not.toContain('# Nothing')
  })

  it('has no toggle when nothing is folded', () => {
    expect(kinds(certRenderItems(GROUPS.filter(g => !g.collapsed), none, false))).not.toContain('[toggle]')
  })
})
