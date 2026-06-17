import type { Meta, StoryObj } from '@storybook/vue3'
import WpPageHero from './WpPageHero.vue'
import WpButton from '../WpButton/WpButton.vue'

const meta: Meta<typeof WpPageHero> = {
  title: 'Components/WpPageHero',
  component: WpPageHero,
  tags: ['autodocs'],
  argTypes: {
    badgeVariant: { control: 'select', options: ['sky', 'navy', 'orange'] },
    size:         { control: 'select', options: ['lg', 'md'] },
    tone:         { control: 'select', options: ['navy', 'light'] },
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

/** Hero with a call-to-action via the `#actions` slot (e.g. landing pages). */
export const WithActions: Story = {
  args: {
    title: 'Rejoignez la communauté Waypoint360',
    desc:  'Suivez vos vols, débloquez des badges et grimpez dans les classements.',
    badge: 'Communauté',
  },
  render: (args) => ({
    components: { WpPageHero, WpButton },
    setup: () => ({ args }),
    template: `
      <WpPageHero v-bind="args">
        <template #actions>
          <WpButton label="Créer un compte" variant="cta" />
        </template>
      </WpPageHero>
    `,
  }),
}

/** Light tone — legacy surface (navy text on a light band). */
export const Light: Story = {
  args: {
    title: 'Hero en thème clair',
    desc:  'Variante claire conservée pour compatibilité ascendante.',
    badge: 'Variante',
    tone:  'light',
    crumbs: [
      { label: 'Accueil', href: '/' },
      { label: 'Exemple' },
    ],
  },
}
