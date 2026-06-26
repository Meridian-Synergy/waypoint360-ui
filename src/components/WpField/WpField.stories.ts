import type { Meta, StoryObj } from '@storybook/vue3'
import WpField from './WpField.vue'

const meta: Meta<typeof WpField> = {
  title: 'Components/WpField',
  component: WpField,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpField>

const render = (args: Record<string, unknown>) => ({
  components: { WpField },
  setup: () => ({ args }),
  template: `<WpField v-bind="args"><input style="width:100%;padding:8px 16px;border:1.5px solid #D5D9E4;border-radius:8px" placeholder="Contrôle personnalisé" /></WpField>`,
})

export const Default:  Story = { render, args: { label: 'Champ personnalisé', hint: 'Wrapper réutilisable (label + hint/erreur).' } }
export const Required: Story = { render, args: { label: 'Champ requis', required: true } }
export const WithError: Story = { render, args: { label: 'Champ', error: 'Valeur invalide.' } }
