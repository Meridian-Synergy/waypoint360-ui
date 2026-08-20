import type { Meta, StoryObj } from '@storybook/vue3'
import WpDataTable from './WpDataTable.vue'

const meta: Meta<typeof WpDataTable> = {
  title: 'Components/WpDataTable',
  component: WpDataTable,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpDataTable>

const columns = [
  { key: 'name', label: 'Nom', grow: true },
  { key: 'city', label: 'Lieu' },
  { key: 'flights', label: 'Vols', numeric: true },
  { key: 'actions', actions: true },
]

const rows = [
  { id: '1', name: '@DRONE', city: 'Boulogne-Billancourt', flights: 128 },
  { id: '2', name: 'AÉRO DRONE', city: 'Toulouse', flights: 42 },
  { id: '3', name: 'AIRLAB INNOVATIONS ET DRONES', city: 'Budelière', flights: 7 },
]

export const Standard: Story = {
  args: { columns, rows, emptyLabel: 'Aucun résultat' },
  render: (args) => ({
    components: { WpDataTable },
    setup: () => ({ args }),
    template: `
      <WpDataTable v-bind="args">
        <template #cell-actions>
          <button type="button">Modifier</button>
        </template>
      </WpDataTable>`,
  }),
}

/** Quand le tableau partage déjà une carte : une carte dans une carte se voit. */
export const SansSurface: Story = {
  args: { columns, rows, surface: false, emptyLabel: 'Aucun résultat' },
}

/** Rien à montrer n'est pas la même chose qu'un tableau vide et muet. */
export const Vide: Story = {
  args: { columns, rows: [], emptyLabel: 'Aucun club ne correspond à cette recherche.' },
}

export const Chargement: Story = {
  args: { columns, rows: [], loading: true, loadingLabel: 'Chargement…' },
}
