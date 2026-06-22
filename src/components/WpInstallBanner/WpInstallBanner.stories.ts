import type { Meta, StoryObj } from '@storybook/vue3'
import WpInstallBanner from './WpInstallBanner.vue'

const meta: Meta<typeof WpInstallBanner> = {
  title: 'Components/WpInstallBanner',
  component: WpInstallBanner,
  tags: ['autodocs'],
  args: {
    title:        'Installer Waypoint360',
    description:  'Ajoutez l’application à votre écran d’accueil pour un accès en un geste.',
    installLabel: 'Installer',
    dismissLabel: 'Plus tard',
  },
}
export default meta

type Story = StoryObj<typeof WpInstallBanner>

export const Light: Story = {}

export const Dark: Story = {
  args: { dark: true },
  parameters: { backgrounds: { default: 'dark' } },
}

// iOS Safari: install is manual, so the install button is hidden and the copy
// explains the Share → Add to Home Screen gesture.
export const IosManual: Story = {
  args: {
    showInstall: false,
    description: 'Touchez Partager puis « Sur l’écran d’accueil » pour l’installer.',
  },
}
