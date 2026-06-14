import type { Meta, StoryObj } from '@storybook/vue3'
import WpNotice from './WpNotice.vue'

const meta: Meta<typeof WpNotice> = {
  title: 'Components/WpNotice',
  component: WpNotice,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['info', 'beta', 'warning', 'danger'] },
    icon: { control: 'boolean' },
  },
  render: (args) => ({
    components: { WpNotice },
    setup: () => ({ args }),
    template: `<WpNotice v-bind="args">This feature is in beta — outputs must be reviewed before operational use.</WpNotice>`,
  }),
}
export default meta

type Story = StoryObj<typeof WpNotice>

export const Info: Story = { args: { tone: 'info' } }
export const Beta: Story = { args: { tone: 'beta' } }
export const Warning: Story = { args: { tone: 'warning' } }
export const Danger: Story = { args: { tone: 'danger' } }
export const NoIcon: Story = { args: { tone: 'info', icon: false } }

export const Dark: Story = {
  args: { tone: 'beta' },
  parameters: { backgrounds: { default: 'dark' } },
}
