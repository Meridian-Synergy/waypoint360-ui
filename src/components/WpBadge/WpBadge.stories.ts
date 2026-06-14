import type { Meta, StoryObj } from '@storybook/vue3'
import WpBadge from './WpBadge.vue'

const meta: Meta<typeof WpBadge> = {
  title: 'Components/WpBadge',
  component: WpBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['active', 'inactive', 'pending', 'alert', 'warning', 'navy', 'sky', 'orange'],
    },
  },
}
export default meta

type Story = StoryObj<typeof WpBadge>

export const Active:   Story = { args: { label: 'Actif',    variant: 'active'   } }
export const Inactive: Story = { args: { label: 'Inactif',  variant: 'inactive' } }
export const Pending:  Story = { args: { label: 'En cours', variant: 'pending'  } }
export const Alert:    Story = { args: { label: 'Alerte',   variant: 'alert'    } }
export const Warning:  Story = { args: { label: 'Attention',variant: 'warning'  } }
export const Navy:     Story = { args: { label: 'SORA',     variant: 'navy', dot: false } }
export const Sky:      Story = { args: { label: 'PDRA G-1', variant: 'sky',  dot: false } }

export const Dark: Story = {
  args: { label: 'Actif', variant: 'active' },
  parameters: { backgrounds: { default: 'dark' } },
}
