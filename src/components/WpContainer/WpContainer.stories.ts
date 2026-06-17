import type { Meta, StoryObj } from '@storybook/vue3'
import WpContainer from './WpContainer.vue'

const meta: Meta<typeof WpContainer> = {
  title: 'Layout/WpContainer',
  component: WpContainer,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['div', 'section'] },
  },
}
export default meta

type Story = StoryObj<typeof WpContainer>

export const Default: Story = {
  render: (args) => ({
    components: { WpContainer },
    setup: () => ({ args }),
    template: `
      <WpContainer v-bind="args">
        <div style="background: #dbe4ff; border: 1px dashed #1B2B56; padding: 16px;">
          Content sits inside the shared rail (max-width + inline padding).
          The dashed box edges mark the rail's left and right boundaries.
        </div>
      </WpContainer>
    `,
  }),
}

/** Two stacked containers — left edges align perfectly (hero + body pattern). */
export const VerticalAlignment: Story = {
  render: () => ({
    components: { WpContainer },
    template: `
      <div>
        <section style="background: #1B2B56; padding: 32px 0;">
          <WpContainer>
            <h1 style="color: #fff; margin: 0; font-family: sans-serif;">Page title (hero)</h1>
          </WpContainer>
        </section>
        <WpContainer style="display: block; padding-top: 24px;">
          <p style="margin: 0; font-family: sans-serif;">
            Body text — its left edge falls exactly under the hero title.
          </p>
        </WpContainer>
      </div>
    `,
  }),
}
