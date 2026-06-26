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

export const Dark: Story = {
  args: { label: 'Régime de vol', placeholder: 'Choisir…', options },
  parameters: { backgrounds: { default: 'dark' } },
}
