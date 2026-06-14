import type { Meta, StoryObj } from '@storybook/vue3'
import WpContactBanner from './WpContactBanner.vue'

const meta: Meta<typeof WpContactBanner> = {
  title: 'Components/WpContactBanner',
  component: WpContactBanner,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpContactBanner>

export const Default: Story = {
  args: {
    title: 'Parlons de votre projet',
    desc:  'Réponse rapide, devis gratuit. Disponibles en Bourgogne et Nièvre.',
    actions: [
      { type: 'whatsapp', href: 'https://wa.me/33766974874', label: 'WhatsApp' },
      { type: 'email',    href: 'mailto:contact@waypoint360.eu', label: 'Email' },
    ],
  },
}

export const EmailOnly: Story = {
  args: {
    title: 'Une question ?',
    desc:  'Contactez-nous par email, nous répondons sous 24h.',
    actions: [
      { type: 'email', href: 'mailto:contact@waypoint360.eu', label: 'Envoyer un email' },
    ],
  },
}
