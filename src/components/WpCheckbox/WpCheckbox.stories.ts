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

export const Dark: Story = {
  args: { label: 'UAS-FR-597832 — DJI Avata 360', modelValue: true },
  parameters: { backgrounds: { default: 'dark' } },
}
