import type { Meta, StoryObj } from '@storybook/vue3'
import WpCarousel from './WpCarousel.vue'

const meta: Meta<typeof WpCarousel> = {
  title: 'Components/WpCarousel',
  component: WpCarousel,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpCarousel>

const labels = { ariaLabel: 'Drones d’occasion', prevLabel: 'Précédent', nextLabel: 'Suivant' }

const carte = (titre: string, prix: string) => `
  <article style="border:1px solid var(--wp-color-border,#d5dced);border-radius:10px;
                  background:var(--wp-color-surface,#fff);padding:16px;height:100%">
    <h3 style="margin:0 0 8px;font-size:1rem">${titre}</h3>
    <p style="margin:0;font-weight:700">${prix}</p>
  </article>`

function rail(n: number) {
  return {
    components: { WpCarousel },
    setup: () => ({ labels }),
    template: `<WpCarousel v-bind="labels">
      ${Array.from({ length: n }, (_, i) => carte(`Mavic 3 — nº ${i + 1}`, `${1200 + i * 150} €`)).join('')}
    </WpCarousel>`,
  }
}

/** Le cas nominal : plus de cartes que de place, les deux boutons servent. */
export const Plein: Story = { render: () => rail(8) }

/** Assez peu pour tout montrer : les deux boutons restent éteints. */
export const Court: Story = { render: () => rail(2) }

/**
 * ⛔ LE CAS QUI A MOTIVÉ LA DÉCISION. Zéro carte : le composant se retire
 * entièrement plutôt que de rendre un rail vide. Une vitrine qui montre un rail
 * vide dit qu'elle est morte, et le `v-if` vit ICI pour qu'aucune page appelante
 * n'ait à s'en souvenir.
 */
export const Vide: Story = {
  render: () => ({
    components: { WpCarousel },
    setup: () => ({ labels }),
    template: `<div>
      <p style="color:var(--wp-color-text-sub,#5b6684)">Rien ne doit s’afficher sous cette ligne.</p>
      <WpCarousel v-bind="labels"><template v-if="false"><span>jamais</span></template></WpCarousel>
    </div>`,
  }),
}
