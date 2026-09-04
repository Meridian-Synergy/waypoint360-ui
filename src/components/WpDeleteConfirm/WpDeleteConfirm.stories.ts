import type { Meta, StoryObj } from '@storybook/vue3'
import WpDeleteConfirm from './WpDeleteConfirm.vue'

const meta: Meta<typeof WpDeleteConfirm> = {
  title: 'Feedback/WpDeleteConfirm',
  component: WpDeleteConfirm,
  tags: ['autodocs'],
  args: {
    confirmLabel: 'Confirmer la suppression',
    cancelLabel:  'Annuler',
    busyLabel:    'Suppression…',
  },
}
export default meta

type Story = StoryObj<typeof WpDeleteConfirm>

export const Standard: Story = {
  args: {
    title: 'Supprimer Denis Gosset ?',
    consequence: "Cette action est irréversible. Uniquement possible si la société n'a aucun utilisateur.",
  },
}

// ⚠️ La conséquence est ce qui distingue ce panneau d'un simple bouton : elle
// dit ce que la suppression entraîne ET ce qui peut l'empêcher.
export const ConsequenceLongue: Story = {
  name: 'Conséquence détaillée',
  args: {
    title: 'Supprimer le drone DJI Mini 5 Pro ?',
    consequence: "Ses vols restent dans le carnet mais ne seront plus rattachés à un appareil. Le QR de retour en cas de perte cessera de fonctionner immédiatement.",
  },
}

export const EnCours: Story = {
  name: 'Suppression en cours',
  args: {
    title: 'Supprimer Denis Gosset ?',
    consequence: 'Cette action est irréversible.',
    busy: true,
  },
}

// Un refus arrivé APRÈS le clic, affiché sous les boutons plutôt qu'à leur place.
export const Refus: Story = {
  name: 'Refus de l’API',
  args: {
    title: 'Supprimer Meridian Synergy ?',
    consequence: "Cette action est irréversible. Uniquement possible si la société n'a aucun utilisateur.",
    error: 'Cette société compte encore 3 utilisateurs.',
  },
}
