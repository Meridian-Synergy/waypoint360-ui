import type { Meta, StoryObj } from '@storybook/vue3'
import WpSelect from './WpSelect.vue'

const meta: Meta<typeof WpSelect> = {
  title: 'Components/WpSelect',
  component: WpSelect,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpSelect>

const options = [
  { value: 'OUV', label: 'Catégorie ouverte' },
  { value: 'HSS', label: 'HSS' },
  { value: 'STSEM', label: 'STS européen' },
]

export const Default:  Story = { args: { label: 'Régime de vol', placeholder: 'Choisir…', options } }
export const Selected: Story = { args: { label: 'Régime de vol', modelValue: 'HSS', options } }
export const WithError: Story = { args: { label: 'Régime de vol', placeholder: 'Choisir…', options, error: 'Champ requis.' } }
export const Disabled: Story = { args: { label: 'Régime de vol', modelValue: 'OUV', options, disabled: true } }

// A dark consumer must set --wp-scheme, otherwise the browser draws the arrow and the
// option popup light — dark-on-dark arrow, white popup. Open the select to see it.
export const Dark: Story = {
  args: { label: 'Régime de vol', placeholder: 'Choisir…', options },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [() => ({ template: '<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>' })],
}
