import type { Meta, StoryObj } from '@storybook/vue3'
import WpSocialLinks from './WpSocialLinks.vue'

const sampleLinks = [
  { network: 'instagram' as const, href: '#', label: 'Instagram' },
  { network: 'linkedin'  as const, href: '#', label: 'LinkedIn'  },
  { network: 'tiktok'   as const, href: '#', label: 'TikTok'    },
  { network: 'youtube'  as const, href: '#', label: 'YouTube'   },
  { network: 'twitter'  as const, href: '#', label: 'X'         },
  { network: 'telegram' as const, href: '#', label: 'Telegram'  },
  { network: 'email'    as const, href: 'mailto:contact@example.com', label: 'Email' },
]

const meta: Meta<typeof WpSocialLinks> = {
  title: 'Components/WpSocialLinks',
  component: WpSocialLinks,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['dark', 'light'] },
    size:    { control: 'select', options: ['sm', 'md'] },
  },
}
export default meta

type Story = StoryObj<typeof WpSocialLinks>

export const Dark: Story = {
  args: { links: sampleLinks, variant: 'dark', size: 'md' },
  parameters: { backgrounds: { default: 'dark' } },
}

export const Light: Story = {
  args: { links: sampleLinks, variant: 'light', size: 'md' },
}

export const Small: Story = {
  args: { links: sampleLinks, variant: 'dark', size: 'sm' },
  parameters: { backgrounds: { default: 'dark' } },
}
