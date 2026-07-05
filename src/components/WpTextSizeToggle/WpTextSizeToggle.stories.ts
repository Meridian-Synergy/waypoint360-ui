import type { Meta, StoryObj } from '@storybook/vue3'
import WpTextSizeToggle from './WpTextSizeToggle.vue'

const meta: Meta<typeof WpTextSizeToggle> = {
  title: 'Components/WpTextSizeToggle',
  component: WpTextSizeToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accessible text-size control (A− / A / A+). Writes `--wp-font-scale` on ' +
          '<html> and persists it in localStorage; base.css multiplies the root ' +
          'font-size by it, so anything sized in rem scales. Use the paragraph below ' +
          'each story to see the effect.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof WpTextSizeToggle>

const withSample = (extra = '') => ({
  components: { WpTextSizeToggle },
  template: `
    <div style="display:flex; flex-direction:column; gap:16px; ${extra}">
      <WpTextSizeToggle />
      <p style="font-size:1rem; margin:0; max-width:38ch;">
        Texte de démonstration en rem — cliquez A+ / A− pour voir la taille suivre le réglage.
      </p>
    </div>
  `,
})

export const Default: Story = { render: () => withSample() }

export const Navy: Story = {
  render: () => withSample('color:#fff;'),
  parameters: { backgrounds: { default: 'navy' } },
}

export const Dark: Story = {
  render: () => withSample('color:#fff;'),
  parameters: { backgrounds: { default: 'dark' } },
}
