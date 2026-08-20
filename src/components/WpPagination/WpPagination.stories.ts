import type { Meta, StoryObj } from '@storybook/vue3'
import WpPagination from './WpPagination.vue'

const meta: Meta<typeof WpPagination> = {
  title: 'Components/WpPagination',
  component: WpPagination,
  tags: ['autodocs'],
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
    siblings: { control: { type: 'number', min: 0, max: 3 } },
  },
}
export default meta

type Story = StoryObj<typeof WpPagination>

const labels = { prevLabel: 'Précédent', nextLabel: 'Suivant', pageLabel: 'Page {page}', ariaLabel: 'Pagination' }

/** Le cas qui a motivé le composant : 1 053 organisations, 43 pages. */
export const Longue: Story = { args: { page: 6, totalPages: 43, ...labels } }

/** Au début, l'ellipse de gauche n'a pas lieu d'être. */
export const Debut: Story = { args: { page: 1, totalPages: 43, ...labels } }

/** À la fin non plus, de l'autre côté. */
export const Fin: Story = { args: { page: 43, totalPages: 43, ...labels } }

/** Assez court pour tout montrer : aucune ellipse ne remplace un seul numéro. */
export const Courte: Story = { args: { page: 2, totalPages: 5, ...labels } }

/** Une seule page : le composant ne rend rien, il ne montre pas « 1 / 1 ». */
export const PageUnique: Story = { args: { page: 1, totalPages: 1, ...labels } }
