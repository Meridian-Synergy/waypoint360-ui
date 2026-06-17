import type { Meta, StoryObj } from '@storybook/vue3'
import WpShareButton from './WpShareButton.vue'

const meta: Meta<typeof WpShareButton> = {
  title: 'Components/WpShareButton',
  component: WpShareButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['icon', 'labeled'] },
    dark:    { control: 'boolean' },
  },
  args: {
    url:   'https://waypoint360.eu/pilote/denis-g',
    title: 'Denis G. sur Waypoint360',
    text:  'Découvrez mon profil de télépilote sur Waypoint360',
  },
}
export default meta

type Story = StoryObj<typeof WpShareButton>

export const Icon: Story = {
  args: { variant: 'icon' },
}

export const Labeled: Story = {
  args: { variant: 'labeled', label: 'Partager' },
}

export const Dark: Story = {
  args: { variant: 'labeled', label: 'Partager', dark: true },
  parameters: { backgrounds: { default: 'dark' } },
}
