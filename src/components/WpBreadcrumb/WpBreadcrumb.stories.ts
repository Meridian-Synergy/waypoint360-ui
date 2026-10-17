import type { Meta, StoryObj } from '@storybook/vue3'
import WpBreadcrumb from './WpBreadcrumb.vue'

const meta: Meta<typeof WpBreadcrumb> = {
  title: 'Components/WpBreadcrumb',
  component: WpBreadcrumb,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpBreadcrumb>

export const TwoLevels: Story = {
  args: {
    crumbs: [
      { label: 'Accueil', href: '/' },
      { label: 'Services' },
    ],
  },
}

export const ThreeLevels: Story = {
  args: {
    crumbs: [
      { label: 'Accueil',  href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Audit thermique' },
    ],
  },
}

/**
 * ⛔ UN TITRE LONG SUR UN ÉCRAN DE TÉLÉPHONE. Mesuré le 2026-10-17 sur
 * waypoint360.eu à 390 px : 10 guides sur 29 débordaient horizontalement, la
 * page entière défilant de côté jusqu'à 485 px. La cause était ici : le libellé
 * de la page courante ne pouvait pas passer à la ligne (`white-space: nowrap`),
 * et c'est justement le titre de l'article, le plus long des maillons.
 *
 * ⚠️ LA MESURE, PAS LA PRÉSENCE D'UNE RÈGLE CSS. Le fil se rend dans une boîte
 * de 342 px (390 moins deux marges de 24) ; il doit y tenir.
 */
export const LongCurrentOnPhone: Story = {
  args: {
    crumbs: [
      { label: 'Accueil',  href: '/' },
      { label: 'Articles', href: '/articles' },
      { label: 'Inspection thermique par drone : toitures, panneaux solaires et réseaux industriels' },
    ],
  },
  render: args => ({
    components: { WpBreadcrumb },
    setup: () => ({ args }),
    template: '<div data-testid="phone" style="width: 342px; overflow: visible"><WpBreadcrumb v-bind="args" /></div>',
  }),
  play: async ({ canvasElement }) => {
    const boite = canvasElement.querySelector<HTMLElement>('[data-testid="phone"]')!
    const fil = boite.querySelector<HTMLElement>('.wp-breadcrumb')!
    const droite = boite.getBoundingClientRect().right
    for (const maillon of fil.querySelectorAll<HTMLElement>('a, span')) {
      const r = maillon.getBoundingClientRect().right
      if (r > droite + 0.5) {
        throw new Error(`« ${maillon.textContent} » dépasse de ${Math.round(r - droite)} px`)
      }
    }
    if (fil.scrollWidth > boite.clientWidth) {
      throw new Error(`le fil fait ${fil.scrollWidth} px pour une boîte de ${boite.clientWidth}`)
    }
  },
}
