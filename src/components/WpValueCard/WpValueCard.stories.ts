import type { Meta, StoryObj } from '@storybook/vue3'
import WpValueCard from './WpValueCard.vue'

const shieldIcon = `<path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>`
const pinIcon    = `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="1.75"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="1.75"/>`
const cpuIcon    = `<rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="1.75"/><path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>`
const badgeIcon  = `<path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2l2.09 1.26L17 2.5l1 2.77L20.5 7l-.74 2.91L21 12l-1.24 2.09L20.5 17l-2.77 1-1.74 2.5L13 19.74 12 22l-2.09-1.26L7 21.5l-1-2.77L3.5 17l.74-2.91L3 12l1.24-2.09L3.5 7l2.77-1L8 3.5 10.91 2.26 12 2z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>`

const meta: Meta<typeof WpValueCard> = {
  title: 'Components/WpValueCard',
  component: WpValueCard,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpValueCard>

export const Safety: Story = {
  args: {
    title: 'Sécurité & conformité',
    desc:  'Toutes nos opérations respectent la réglementation DGAC en vigueur. Assurance RC professionnelle incluse.',
    icon:  shieldIcon,
  },
}

export const Local: Story = {
  args: {
    title: 'Ancrage territorial',
    desc:  'Basés en Bourgogne, nous intervenons dans toute la région avec une connaissance fine du terrain.',
    icon:  pinIcon,
  },
}

export const Tech: Story = {
  args: {
    title: 'Technologie de pointe',
    desc:  'Flotte DJI professionnelle, capteurs thermiques, RGB haute résolution et logiciels de traitement.',
    icon:  cpuIcon,
  },
}

export const Certified: Story = {
  args: {
    title: 'Certifications reconnues',
    desc:  'A1/A3, A2, CATS, Certiphyto — toutes les accréditations pour opérer en toute légitimité.',
    icon:  badgeIcon,
  },
}
