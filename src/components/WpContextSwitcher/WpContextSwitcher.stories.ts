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

/**
 * ⚠️ LE CAS QUI A MOTIVÉ L'USAGE : une seule organisation, deux casquettes. Le
 * nom n'y distingue rien et disparaît ; ce sont les usages qui portent les
 * lignes, et la bascule se fait sans changer d'organisation.
 */
export const DeuxUsagesUneOrganisation: Story = {
  name: 'Un pro qui achète aussi',
  args: {
    contexts: [
      { orgId: 'org-op', name: 'AgriDrone', universe: 'pro_operator' as const, universeLabel: 'Télépilote', intention: 'droniste' },
      { orgId: 'org-op', name: 'AgriDrone', universe: 'client' as const,       universeLabel: 'Client',     intention: 'client' },
    ],
    activeOrgId: 'org-op',
    activeIntention: 'droniste',
    theme: 'dark',
  },
  parameters: { backgrounds: { default: 'navy' } },
}
