import type { Meta, StoryObj } from '@storybook/vue3'
import WpContextSwitcher from './WpContextSwitcher.vue'

const meta: Meta<typeof WpContextSwitcher> = {
  title: 'App/WpContextSwitcher',
  component: WpContextSwitcher,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['dark', 'light'] },
  },
}
export default meta

type Story = StoryObj<typeof WpContextSwitcher>

const CONTEXTS = [
  { orgId: 'org-ind', name: 'Mon espace', universe: 'individual' as const, universeLabel: 'Individuel' },
  { orgId: 'org-op',  name: 'AgriDrone', universe: 'client' as const,      universeLabel: 'Client' },
]

export const Dark: Story = {
  args: { contexts: CONTEXTS, activeOrgId: 'org-ind', theme: 'dark' },
  parameters: { backgrounds: { default: 'navy' } },
}

export const Light: Story = {
  args: { contexts: CONTEXTS, activeOrgId: 'org-op', theme: 'light' },
  parameters: { backgrounds: { default: 'light' } },
}

export const SingleContext: Story = {
  name: 'Single context',
  args: { contexts: [CONTEXTS[0]], activeOrgId: 'org-ind', theme: 'dark' },
  parameters: { backgrounds: { default: 'navy' } },
}
