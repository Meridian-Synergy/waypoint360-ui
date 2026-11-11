import type { Meta, StoryObj } from '@storybook/vue3'
import WpAiMark from './WpAiMark.vue'

const meta: Meta<typeof WpAiMark> = {
  title: 'Components/WpAiMark',
  component: WpAiMark,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['badge', 'inline'] },
  },
}
export default meta

type Story = StoryObj<typeof WpAiMark>

const HINT = "Texte rédigé par WP360 AI : relisez-le avant de l'utiliser."

export const Badge: Story = { args: { hint: HINT } }

export const Inline: Story = {
  args: { variant: 'inline', label: 'Traduit par WP360 AI depuis : ukrainien', hint: 'Traduction automatique par WP360 AI.' },
}

export const NextToText: Story = {
  render: () => ({
    components: { WpAiMark },
    setup: () => ({ HINT }),
    template: `
      <div style="max-width: 560px; font-family: var(--wp-font-body, Barlow, sans-serif)">
        <p style="display: flex; align-items: center; gap: 10px; margin: 0; font-weight: 600">
          2.3 Organisation de l'exploitant <WpAiMark :hint="HINT" />
        </p>
        <p style="line-height: 1.55">L'exploitant Drones Exemple SAS désigne un responsable des opérations, joignable pendant toute la durée du vol.</p>
        <WpAiMark variant="inline" label="Traduit par WP360 AI depuis : ukrainien">
          <button type="button" style="background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline">Voir l'original</button>
        </WpAiMark>
      </div>`,
  }),
}

// The dark rule follows the consumer's [data-theme] switch, as WpButton does.
export const Dark: Story = {
  render: () => ({
    components: { WpAiMark },
    setup: () => ({ HINT }),
    template: `
      <div data-theme="dark" style="display: flex; gap: 16px; align-items: center; padding: 12px; --wp-color-surface: #1B2B56; --wp-color-text-sub: #f2f2f7">
        <WpAiMark :hint="HINT" />
        <WpAiMark variant="inline" label="Traduit par WP360 AI" />
      </div>`,
  }),
  parameters: { backgrounds: { default: 'navy' } },
}
