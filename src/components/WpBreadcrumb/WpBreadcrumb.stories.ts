import type { Meta, StoryObj } from '@storybook/vue3'
import WpBreadcrumb from './WpBreadcrumb.vue'

const meta: Meta<typeof WpBreadcrumb> = {
  title: 'Components/WpBreadcrumb',
  component: WpBreadcrumb,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpBreadcrumb>

export const TwoLevels: Story = {
  args: {
    crumbs: [
      { label: 'Accueil', href: '/' },
      { label: 'Services' },
    ],
  },
}

export const ThreeLevels: Story = {
  args: {
    crumbs: [
      { label: 'Accueil',  href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Audit thermique' },
    ],
  },
}
