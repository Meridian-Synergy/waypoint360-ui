import type { Meta, StoryObj } from '@storybook/vue3'
import WpTextarea from './WpTextarea.vue'

const meta: Meta<typeof WpTextarea> = {
  title: 'Components/WpTextarea',
  component: WpTextarea,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpTextarea>

export const Default:  Story = { args: { label: 'Autres informations utiles', placeholder: 'Nombre de vols, durée moyenne…' } }
export const WithError: Story = { args: { label: 'Notes', modelValue: '...', error: 'Champ requis.' } }
export const Disabled: Story = { args: { label: 'Notes', modelValue: 'Lecture seule', disabled: true } }

export const Dark: Story = {
  args: { label: 'Autres informations utiles', placeholder: 'Nombre de vols, durée moyenne…' },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [() => ({ template: '<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>' })],
}
