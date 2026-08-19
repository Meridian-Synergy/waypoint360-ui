import type { Meta, StoryObj } from '@storybook/vue3'
import WpPhoneInput from './WpPhoneInput.vue'

const meta: Meta<typeof WpPhoneInput> = {
  title: 'Components/WpPhoneInput',
  component: WpPhoneInput,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpPhoneInput>

export const Default: Story = { args: { label: 'Téléphone' } }

// Le modèle porte l'E.164 ; l'affichage, lui, est lisible.
export const Filled: Story = { args: { label: 'Téléphone', modelValue: '+33612345678' } }

// Un fixe est un numéro comme un autre : rien ne distingue 01 de 06.
export const Landline: Story = { args: { label: 'Téléphone fixe', modelValue: '+33120182536' } }

// Un numéro étranger passe intact : on ne connaît pas ses conventions.
export const Foreign: Story = { args: { label: 'Téléphone', modelValue: '+41791234567' } }

export const Invalid: Story = {
  args: { label: 'Téléphone', modelValue: null, invalidMessage: 'Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78' },
}

export const Disabled: Story = { args: { label: 'Téléphone', modelValue: '+33612345678', disabled: true } }
