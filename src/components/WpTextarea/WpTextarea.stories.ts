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

// Les trois paliers du compteur, côte à côte : c'est en les voyant ensemble
// qu'on juge si l'alerte arrive assez tôt.
export const AvecCompteur: Story = {
  args: { label: 'Description', maxlength: 500, modelValue: 'Trois lignes de présentation.' },
}
export const CompteurProcheDeLaLimite: Story = {
  args: { label: 'Description', maxlength: 100, modelValue: 'x'.repeat(85) },
}
export const CompteurALaLimite: Story = {
  // ⚠️ Le texte accompagne la couleur : elle seule ne dit rien à un lecteur
  // d'écran, ni à qui ne distingue pas le rouge de l'orange.
  args: { label: 'Description', maxlength: 100, modelValue: 'x'.repeat(100), limitLabel: 'limite atteinte' },
}

export const Dark: Story = {
  args: { label: 'Autres informations utiles', placeholder: 'Nombre de vols, durée moyenne…' },
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [() => ({ template: '<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>' })],
}
