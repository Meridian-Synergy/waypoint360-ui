/**
 * Certification groups, one per issuing authority (EASA, FAA, Transport Canada…).
 *
 * Kept free of Vue so the grouping rules can be tested without a browser: this
 * package has no mount tests, and a rule only checked in a story is not checked.
 */

/** One authority's titles, labelled and ordered by the caller. */
export interface WpCertGroup {
  /** Stable identifier (e.g. `easa`, `faa`). */
  id: string
  /** Group heading, e.g. « Europe — EASA ». Omitted: no heading. */
  title?: string
  /** Hint under the heading, e.g. where the titles are valid. */
  hint?: string
  /** Certification key → label, in display order. */
  labels: Record<string, string>
  /** Folded under the « others » toggle unless one of its titles is held. */
  collapsed?: boolean
}

export type CertRenderItem =
  | { kind: 'title'; id: string; text: string; hint?: string }
  | { kind: 'toggle'; id: string }
  | { kind: 'row'; id: string; key: string; label: string }

/**
 * The flat list the component renders, in order: headings, rows, and at most one
 * toggle before the folded groups.
 *
 * ⚠️ A HELD TITLE IS NEVER HIDDEN. Folding exists to spare a French operator the
 * FAA list, not to hide a Part 107 someone actually holds: if any folded title is
 * held, the folded groups are shown and no toggle is rendered.
 *
 * ⚠️ ORDER IS THE CALLER'S. Unfolded groups keep their given order, folded ones
 * follow; the component does not guess which jurisdiction matters to whom.
 */
export function certRenderItems(
  groups: WpCertGroup[],
  isHeld: (key: string) => boolean,
  expanded: boolean,
): CertRenderItem[] {
  const open = groups.filter(g => !g.collapsed)
  const folded = groups.filter(g => g.collapsed)
  const foldedHeld = folded.some(g => Object.keys(g.labels).some(isHeld))
  const showFolded = expanded || foldedHeld

  const items: CertRenderItem[] = []
  const push = (g: WpCertGroup) => {
    const keys = Object.keys(g.labels)
    if (!keys.length) return
    if (g.title) items.push({ kind: 'title', id: `title-${g.id}`, text: g.title, hint: g.hint })
    for (const key of keys) items.push({ kind: 'row', id: `row-${key}`, key, label: g.labels[key]! })
  }
  open.forEach(push)
  if (folded.length) {
    if (showFolded) folded.forEach(push)
    else items.push({ kind: 'toggle', id: 'toggle-others' })
  }
  return items
}
