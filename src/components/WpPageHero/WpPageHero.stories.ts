import type { Meta, StoryObj } from '@storybook/vue3'
import WpPageHero from './WpPageHero.vue'

const meta: Meta<typeof WpPageHero> = {
  title: 'Components/WpPageHero',
  component: WpPageHero,
  tags: ['autodocs'],
  argTypes: {
    badgeVariant: { control: 'select', options: ['sky', 'navy', 'orange'] },
    size:         { control: 'select', options: ['lg', 'md'] },
  },
}
export default meta

type Story = StoryObj<typeof WpPageHero>

export const Default: Story = {
  args: {
    title: 'Audit thermique par drone',
    desc:  'Détection des ponts thermiques, anomalies sur panneaux solaires et points chauds sur pylônes grâce à la caméra infrarouge embarquée.',
    badge: 'Service',
    crumbs: [
      { label: 'Accueil',  href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Audit thermique' },
    ],
  },
}

export const Large: Story = {
  args: {
    title: 'Nos services drone professionnels',
    desc:  "Six domaines d'expertise pour répondre aux besoins des professionnels en Bourgogne et Nièvre.",
    badge: 'Services',
    size:  'lg',
    crumbs: [
      { label: 'Accueil',  href: '/' },
      { label: 'Services' },
    ],
  },
}

export const NoBreadcrumb: Story = {
  args: {
    title: 'À propos de Waypoint360',
    badge: 'À propos',
    badgeVariant: 'navy',
  },
}
