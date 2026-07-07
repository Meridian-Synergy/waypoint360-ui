import type { Meta, StoryObj } from '@storybook/vue3'
import WpLoadingState from './WpLoadingState.vue'

const meta: Meta<typeof WpLoadingState> = {
  title: 'Components/WpLoadingState',
  component: WpLoadingState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Canonical page/section loading block: WpSpinner + optional localized label, ' +
          'centered in a standard state container. Use it for a page or section that is ' +
          'loading; for a small inline/widget loader use WpSpinner directly. The label is ' +
          'passed by the consumer (the DS is i18n-agnostic).',
      },
    },
  },
  argTypes: {
    label: { control: { type: 'text' } },
    size: { control: { type: 'number' } },
  },
}
export default meta

type Story = StoryObj<typeof WpLoadingState>

export const Default: Story = { args: { label: 'Chargement…' } }

export const SpinnerOnly: Story = { args: {} }

export const Dark: Story = {
  args: { label: 'Chargement…' },
  parameters: { backgrounds: { default: 'dark' } },
}
