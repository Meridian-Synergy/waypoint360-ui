import type { Meta, StoryObj } from '@storybook/vue3'
import WpCheckbox from './WpCheckbox.vue'

const meta: Meta<typeof WpCheckbox> = {
  title: 'Components/WpCheckbox',
  component: WpCheckbox,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpCheckbox>

export const Default:  Story = { args: { label: 'UAS-FR-597832 — DJI Avata 360', modelValue: true } }
export const Unchecked: Story = { args: { label: 'UAS-FR-594654 — DJI Matrice 4TD', modelValue: false } }
export const Disabled: Story = { args: { label: 'UAS-FR-575351 — DJI Néo', disabled: true } }

// A dark consumer must set --wp-scheme: accent-color paints only the checked state, the
// empty control is browser-drawn and would stay light on this surface.
export const Dark: Story = {
  args: { label: 'UAS-FR-597832 — DJI Avata 360', modelValue: true },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [() => ({ template: '<div style="--wp-scheme: dark; --wp-color-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>' })],
}
