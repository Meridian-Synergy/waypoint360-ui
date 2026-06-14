import type { Meta, StoryObj } from '@storybook/vue3'
import WpSocialCard from './WpSocialCard.vue'

const meta: Meta<typeof WpSocialCard> = {
  title: 'Components/WpSocialCard',
  component: WpSocialCard,
  tags: ['autodocs'],
  argTypes: {
    network: { control: 'select', options: ['instagram', 'linkedin', 'tiktok', 'youtube', 'whatsapp', 'email'] },
  },
}
export default meta

type Story = StoryObj<typeof WpSocialCard>

export const Instagram: Story = {
  args: {
    network: 'instagram',
    href:    'https://www.instagram.com/waypoint360',
    label:   'Instagram',
    handle:  '@waypoint360',
  },
}

export const LinkedIn: Story = {
  args: {
    network: 'linkedin',
    href:    'https://www.linkedin.com/company/waypoint360/',
    label:   'LinkedIn',
    handle:  'waypoint360',
  },
}

export const TikTok: Story = {
  args: {
    network: 'tiktok',
    href:    'https://www.tiktok.com/@waypoint360',
    label:   'TikTok',
    handle:  '@waypoint360',
  },
}

export const YouTube: Story = {
  args: {
    network: 'youtube',
    href:    'https://www.youtube.com/@waypoint360',
    label:   'YouTube',
    handle:  '@waypoint360',
  },
}
