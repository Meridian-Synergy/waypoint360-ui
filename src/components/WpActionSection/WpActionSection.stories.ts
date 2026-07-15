import type { Meta, StoryObj } from '@storybook/vue3'
import WpActionSection from './WpActionSection.vue'
import WpActionCard from '../WpActionCard/WpActionCard.vue'

const meta: Meta<typeof WpActionSection> = {
  title: 'Components/WpActionSection',
  component: WpActionSection,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpActionSection>

const actionsTemplate = `
  <WpActionSection title="Actions">
    <WpActionCard
      title="Renvoyer l'invitation"
      description="Renvoyer un email d'invitation à cet utilisateur."
      action-label="Renvoyer l'invitation"
    />
    <WpActionCard
      tone="warning"
      title="Désactiver le compte"
      description="L'utilisateur ne pourra plus se connecter. Son siège sera libéré. Réversible."
      action-label="Désactiver"
      confirm confirm-prompt="Désactiver cet utilisateur ?" confirm-label="Confirmer" cancel-label="Annuler"
    />
    <WpActionCard
      tone="danger"
      title="Supprimer le compte"
      description="Cette action est irréversible. Le compte sera définitivement supprimé."
      action-label="Supprimer"
      confirm confirm-prompt="Supprimer définitivement ?" confirm-label="Confirmer" cancel-label="Annuler"
    />
  </WpActionSection>
`

// The canonical CRUD++ "Actions" section (user detail page).
export const UserActions: Story = {
  render: () => ({ components: { WpActionSection, WpActionCard }, template: actionsTemplate }),
}

export const UserActionsDark: Story = {
  parameters: { backgrounds: { default: 'dark' } },
  render: () => ({ components: { WpActionSection, WpActionCard }, template: actionsTemplate }),
}
