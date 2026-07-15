import type { Meta, StoryObj } from '@storybook/vue3'
import WpActionCard from './WpActionCard.vue'

const meta: Meta<typeof WpActionCard> = {
  title: 'Components/WpActionCard',
  component: WpActionCard,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'warning', 'danger'] },
  },
}
export default meta

type Story = StoryObj<typeof WpActionCard>

export const Neutral: Story = {
  args: {
    title: "Renvoyer l'invitation",
    description: "Renvoyer un email d'invitation à cet utilisateur.",
    tone: 'neutral',
    actionLabel: "Renvoyer l'invitation",
  },
}

export const WarningWithConfirm: Story = {
  args: {
    title: 'Désactiver le compte',
    description: "L'utilisateur ne pourra plus se connecter. Son siège sera libéré. Réversible.",
    tone: 'warning',
    actionLabel: 'Désactiver',
    confirm: true,
    confirmPrompt: 'Désactiver cet utilisateur ?',
    confirmLabel: 'Confirmer',
    cancelLabel: 'Annuler',
  },
}

export const DangerWithConfirm: Story = {
  args: {
    title: 'Supprimer le compte',
    description: 'Cette action est irréversible. Le compte sera définitivement supprimé.',
    tone: 'danger',
    actionLabel: 'Supprimer',
    confirm: true,
    confirmPrompt: 'Supprimer définitivement ?',
    confirmLabel: 'Confirmer',
    cancelLabel: 'Annuler',
  },
}
