import type { Meta, StoryObj } from '@storybook/vue3'
import WpButton from './WpButton.vue'

const meta: Meta<typeof WpButton> = {
  title: 'Components/WpButton',
  component: WpButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'cta', 'critical', 'accent', 'danger', 'ghost', 'outline'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}
export default meta

type Story = StoryObj<typeof WpButton>

export const Primary:   Story = { args: { label: 'Démarrer',         variant: 'primary'   } }
export const Secondary: Story = { args: { label: 'En savoir plus',   variant: 'secondary' } }
export const CTA:       Story = { args: { label: 'Créer un compte',  variant: 'cta'       } }
export const Critical:  Story = { args: { label: 'Supprimer',        variant: 'critical'  } }
export const Disabled:  Story = { args: { label: 'Indisponible',     disabled: true       } }

export const Dark: Story = {
  args: { label: 'Démarrer', variant: 'primary', dark: true },
  parameters: { backgrounds: { default: 'navy' } },
}
export const CTADark: Story = {
  args: { label: 'Créer un compte', variant: 'cta' },
  parameters: { backgrounds: { default: 'dark' } },
}

export const Outline: Story = { args: { label: 'Parrainage', variant: 'outline' } }

export const OutlineDark: Story = {
  args: { label: 'Parrainage', variant: 'outline', dark: true },
  parameters: { backgrounds: { default: 'navy' } },
}

export const AsLink: Story = {
  args: { label: 'Aller au parrainage', variant: 'outline', as: 'a' },
  render: (args) => ({
    components: { WpButton },
    setup: () => ({ args }),
    template: '<WpButton v-bind="args" href="#" />',
  }),
}

/**
 * Les variantes reprises de l'application : `accent` (bleu de marque, constant),
 * `danger` (destructif discret, contour) et `ghost` (neutre en retrait).
 *
 * ⚠️ À REGARDER DANS LES DEUX THÈMES. `danger` et `ghost` tirent leur couleur des
 * jetons du consommateur : ce sont exactement les variantes qui disparaissent
 * quand on ne les vérifie que sur fond clair.
 */
export const VariantesApplication: Story = {
  render: () => ({
    components: { WpButton },
    template: `
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center">
        <WpButton label="Enregistrer" variant="accent" />
        <WpButton label="Supprimer"   variant="danger" />
        <WpButton label="Annuler"     variant="ghost" />
        <WpButton label="Enregistrer" variant="accent" size="sm" />
      </div>`,
  }),
}
