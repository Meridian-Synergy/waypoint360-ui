import type { Meta, StoryObj } from '@storybook/vue3'
import WpSpinner from './WpSpinner.vue'

const meta: Meta<typeof WpSpinner> = {
  title: 'Components/WpSpinner',
  component: WpSpinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The single loading indicator for all Waypoint360 surfaces. Self-contained ' +
          '(ships its own keyframes), inherits `currentColor`, and respects ' +
          'prefers-reduced-motion. Decorative by default — pass `label` to announce it ' +
          'as a live status. Use it inside the canonical `.empty-state` loading block.',
      },
    },
  },
  argTypes: {
    size: { control: { type: 'number' } },
    label: { control: { type: 'text' } },
  },
}
export default meta

type Story = StoryObj<typeof WpSpinner>

export const Default: Story = { args: { size: 32 } }

export const WithLabel: Story = {
  args: { size: 32, label: 'Chargement…' },
}

export const Sizes: Story = {
  render: () => ({
    components: { WpSpinner },
    template: `
      <div style="display:flex; align-items:center; gap:24px;">
        <WpSpinner :size="16" />
        <WpSpinner :size="24" />
        <WpSpinner :size="32" />
        <WpSpinner :size="48" />
      </div>
    `,
  }),
}

export const LoadingBlock: Story = {
  render: () => ({
    components: { WpSpinner },
    template: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:56px 24px; text-align:center;">
        <div style="opacity:0.5;"><WpSpinner /></div>
        <p style="font-size:0.9375rem; font-weight:700; margin:0;">Chargement…</p>
      </div>
    `,
  }),
}
