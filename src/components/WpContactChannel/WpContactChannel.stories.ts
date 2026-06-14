import type { Meta, StoryObj } from '@storybook/vue3'
import WpContactChannel from './WpContactChannel.vue'

const meta: Meta<typeof WpContactChannel> = {
  title: 'Components/WpContactChannel',
  component: WpContactChannel,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['whatsapp', 'email'] },
  },
}
export default meta

type Story = StoryObj<typeof WpContactChannel>

export const WhatsApp: Story = {
  args: {
    type:  'whatsapp',
    href:  'https://wa.me/33766974874',
    label: 'WhatsApp',
    value: '07 66 97 48 74',
    desc:  'Réponse rapide, disponible en journée.',
    cta:   'Envoyer un message',
  },
}

export const Email: Story = {
  args: {
    type:  'email',
    href:  'mailto:contact@waypoint360.eu',
    label: 'Email',
    value: 'contact@waypoint360.eu',
    desc:  'Réponse sous 24h.',
    cta:   'Envoyer un email',
  },
}
