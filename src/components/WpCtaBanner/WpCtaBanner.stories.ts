import type { Meta, StoryObj } from '@storybook/vue3'
import WpCtaBanner from './WpCtaBanner.vue'

const meta: Meta<typeof WpCtaBanner> = {
  title: 'Components/WpCtaBanner',
  component: WpCtaBanner,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpCtaBanner>

export const Default: Story = {
  args: {
    title: 'Demandez un devis gratuit',
    desc:  'Réponse sous 24h. Déplacement dans toute la Bourgogne et la Nièvre.',
    label: 'Nous contacter',
    href:  '/contact',
  },
}
