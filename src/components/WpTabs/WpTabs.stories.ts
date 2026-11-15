import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, fn, userEvent, within } from 'storybook/test'
import WpTabs from './WpTabs.vue'

const meta: Meta<typeof WpTabs> = {
  title: 'Components/WpTabs',
  component: WpTabs,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpTabs>

const SORA_TABS = [
  { key: 'overview',      label: 'Vue d’ensemble',  to: '#overview' },
  { key: 'analysis',      label: 'Analyse',         to: '#analysis', count: '3/11' },
  { key: 'demonstration', label: 'Démonstration',   to: '#demonstration', count: '12/48' },
  { key: 'filing',        label: 'Dépôt METEOR',    to: '#filing', count: '1/4' },
]

/** Each tab is a link; the current one is announced with `aria-current="page"`. */
export const Links: Story = {
  args: { items: SORA_TABS, current: 'demonstration', ariaLabel: 'Parties de la SORA' },
  play: async ({ canvasElement }) => {
    const c = within(canvasElement)
    const nav = c.getByRole('navigation', { name: 'Parties de la SORA' })
    const links = within(nav).getAllByRole('link')
    await expect(links).toHaveLength(4)
    const current = links.filter(l => l.getAttribute('aria-current') === 'page')
    await expect(current).toHaveLength(1)
    await expect(current[0]).toHaveTextContent('Démonstration')
    await expect(current[0]).toHaveTextContent('12/48')
    await expect(links[0]).toHaveAttribute('href', '#overview')
  },
}

/** Without `to`, a tab is a button and emits `select`. */
export const Buttons: Story = {
  args: {
    items: [{ key: 'a', label: 'Liste' }, { key: 'b', label: 'Carte' }],
    current: 'a',
    ariaLabel: 'Vues',
    onSelect: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const c = within(canvasElement)
    await userEvent.click(c.getByRole('button', { name: 'Carte' }))
    await expect(args.onSelect).toHaveBeenCalledWith('b')
  },
}

/**
 * ⚠️ ON A PHONE THE BAR SCROLLS, NOT THE PAGE. Measured, not assumed: inside a 342 px
 * box (390 minus two 24 px gutters), the navigation must stay within the box, and the
 * current tab, the last one here, must be scrolled into view.
 */
export const OnPhone: Story = {
  args: { items: SORA_TABS, current: 'filing', ariaLabel: 'Parties de la SORA' },
  render: args => ({
    components: { WpTabs },
    setup: () => ({ args }),
    template: '<div data-testid="phone" style="width: 342px"><WpTabs v-bind="args" /></div>',
  }),
  play: async ({ canvasElement }) => {
    const box = canvasElement.querySelector<HTMLElement>('[data-testid="phone"]')!
    const nav = box.querySelector<HTMLElement>('.wp-tabs')!
    const bar = box.querySelector<HTMLElement>('.wp-tabs__bar')!
    await expect(nav.getBoundingClientRect().width).toBeLessThanOrEqual(box.clientWidth + 0.5)
    await expect(bar.scrollWidth).toBeGreaterThan(bar.clientWidth)
    const current = bar.querySelector<HTMLElement>('[aria-current="page"]')!
    const b = bar.getBoundingClientRect()
    const r = current.getBoundingClientRect()
    await expect(r.right).toBeLessThanOrEqual(b.right + 0.5)
    await expect(r.left).toBeGreaterThanOrEqual(b.left - 0.5)
  },
}
