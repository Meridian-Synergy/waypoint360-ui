import type { Meta, StoryObj } from '@storybook/vue3'
import WpInput from './WpInput.vue'

const meta: Meta<typeof WpInput> = {
  title: 'Components/WpInput',
  component: WpInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
  },
}
export default meta

type Story = StoryObj<typeof WpInput>

export const Default:  Story = { args: { label: 'Nom de la mission', placeholder: 'Ex: Inspection A47' } }
export const WithHint: Story = { args: { label: 'Zone de vol', placeholder: '48.8566° N, 2.3522° E', hint: 'Format: latitude° N/S, longitude° E/W' } }
export const WithError: Story = { args: { label: 'Référence client', modelValue: 'REF-INVALID', error: 'Format invalide — utilisez REF-AAAA-XXXXX.' } }
export const Disabled: Story = { args: { label: 'Altitude maximale', modelValue: '120 m (limité par SORA)', disabled: true } }

export const Password: Story = { args: { label: 'Mot de passe', type: 'password', modelValue: 'S3cr3t!', placeholder: '••••••••' } }

export const Dark: Story = {
  args: { label: 'Nom de la mission', placeholder: 'Ex: Inspection A47' },
  parameters: { backgrounds: { default: 'dark' } },
}
