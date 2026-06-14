import type { Meta, StoryObj } from '@storybook/vue3'
import WpSpecGrid from './WpSpecGrid.vue'

const weightIcon   = `<path d="M12 3a7 7 0 1 0 0 14A7 7 0 0 0 12 3zM8 12h8M12 8v8" stroke="currentColor" stroke-linecap="round"/>`
const timeIcon     = `<circle cx="12" cy="12" r="9" stroke="currentColor"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>`
const cameraIcon   = `<rect x="2" y="7" width="15" height="11" rx="2" stroke="currentColor"/><path d="M17 11l5-3v8l-5-3v-2z" stroke="currentColor" stroke-linejoin="round"/>`
const rangeIcon    = `<path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5.5 5.5 0 0 1 7 0" stroke="currentColor" stroke-linecap="round"/><circle cx="12" cy="19" r="1" fill="currentColor"/>`

const meta: Meta<typeof WpSpecGrid> = {
  title: 'Components/WpSpecGrid',
  component: WpSpecGrid,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpSpecGrid>

export const Default: Story = {
  args: {
    label: 'Caractéristiques techniques',
    items: [
      { label: 'Poids',          value: '47,5 kg',  icon: weightIcon  },
      { label: 'Temps de vol',   value: '17 min',   icon: timeIcon    },
      { label: 'Caméra',         value: '4K RGB + IR', icon: cameraIcon },
      { label: 'Portée',         value: '2 km',     icon: rangeIcon   },
    ],
  },
}

export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Temps de vol', value: '45 min', icon: timeIcon  },
      { label: 'Portée',       value: '10 km',  icon: rangeIcon },
    ],
  },
}
