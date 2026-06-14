import type { Meta, StoryObj } from '@storybook/vue3'
import WpLogo from './WpLogo.vue'

const meta: Meta<typeof WpLogo> = {
  title: 'Brand/WpLogo',
  component: WpLogo,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['horizontal', 'vertical', 'icon'] },
    color:   { control: 'select', options: ['navy', 'white'] },
    width:   { control: 'number' },
  },
}
export default meta

type Story = StoryObj<typeof WpLogo>

export const HorizontalNavy: Story = {
  args: { variant: 'horizontal', color: 'navy', width: 300 },
}

export const HorizontalWhite: Story = {
  args: { variant: 'horizontal', color: 'white', width: 300 },
  parameters: { backgrounds: { default: 'dark' } },
}

export const VerticalNavy: Story = {
  args: { variant: 'vertical', color: 'navy', width: 175 },
}

export const VerticalWhite: Story = {
  args: { variant: 'vertical', color: 'white', width: 175 },
  parameters: { backgrounds: { default: 'dark' } },
}

export const IconNavy: Story = {
  args: { variant: 'icon', color: 'navy', width: 40 },
}

export const IconWhite: Story = {
  args: { variant: 'icon', color: 'white', width: 40 },
  parameters: { backgrounds: { default: 'dark' } },
}

export const IconSmall: Story = {
  name: 'Icon — header size (28 px)',
  args: { variant: 'icon', color: 'navy', width: 28 },
}
