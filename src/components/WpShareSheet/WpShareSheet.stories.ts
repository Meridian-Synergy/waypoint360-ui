import type { Meta, StoryObj } from '@storybook/vue3'
import WpShareSheet from './WpShareSheet.vue'

const meta: Meta<typeof WpShareSheet> = {
  title: 'Components/WpShareSheet',
  component: WpShareSheet,
  tags: ['autodocs'],
  args: {
    url:        'https://waypoint360.eu/pilote/denis-g',
    title:      'Denis G. sur Waypoint360',
    text:       'Découvrez mon profil de télépilote sur Waypoint360',
    shareTitle: 'Partager',
  },
}
export default meta

type Story = StoryObj<typeof WpShareSheet>

export const Light: Story = {}

export const Dark: Story = {
  args: { dark: true },
  parameters: { backgrounds: { default: 'dark' } },
}

export const Subset: Story = {
  args: { networks: ['whatsapp', 'email', 'copy'] },
}
