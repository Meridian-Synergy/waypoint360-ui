import type { Meta, StoryObj } from '@storybook/vue3'
import WpRadioGroup from './WpRadioGroup.vue'

const meta: Meta<typeof WpRadioGroup> = {
  title: 'Components/WpRadioGroup',
  component: WpRadioGroup,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpRadioGroup>

const options = [
  { value: 'EV', label: 'En vue du télépilote' },
  { value: 'HV', label: 'Hors vue du télépilote', disabled: true },
]

export const Default:  Story = { args: { label: "Pilotage de l'aéronef", modelValue: 'EV', options } }
export const WithError: Story = { args: { label: "Pilotage de l'aéronef", options, error: 'Champ requis.' } }

// A dark consumer must set --wp-scheme: accent-color paints only the checked state, the
// empty control is browser-drawn and would stay light on this surface.
export const Dark: Story = {
  args: { label: "Pilotage de l'aéronef", modelValue: 'EV', options },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [() => ({ template: '<div style="--wp-scheme: dark; --wp-color-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>' })],
}
