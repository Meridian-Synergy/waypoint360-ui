import type { Meta, StoryObj } from '@storybook/vue3'
import WpButton from './WpButton.vue'

const meta: Meta<typeof WpButton> = {
  title: 'Components/WpButton',
  component: WpButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'cta', 'critical', 'outline'] },
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
  args: { label: 'Démarrer', variant: 'primary' },
  parameters: { backgrounds: { default: 'dark' } },
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
