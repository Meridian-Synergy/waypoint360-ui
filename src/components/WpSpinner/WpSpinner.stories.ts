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
          'The single loading indicator for all Waypoint360 surfaces: a ring of brand-blue (sky) ' +
          'dots fading around the circle as it rotates. Theme-safe — the trail fades via opacity, ' +
          'not a fixed light/dark colour, so it reads the same on dark and light backgrounds. ' +
          'Self-contained (ships its own keyframes) and respects prefers-reduced-motion. ' +
          'Decorative by default — pass `label` to announce it as a live status.',
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

// Reads on both themes: the dots are the sky accent, the fade is opacity-only.
export const OnLight: Story = {
  parameters: { backgrounds: { default: 'light' } },
  render: () => ({ components: { WpSpinner }, template: '<WpSpinner :size="48" />' }),
}

export const OnDark: Story = {
  parameters: { backgrounds: { default: 'dark' } },
  render: () => ({ components: { WpSpinner }, template: '<WpSpinner :size="48" />' }),
}

export const OnNavy: Story = {
  parameters: { backgrounds: { default: 'navy' } },
  render: () => ({ components: { WpSpinner }, template: '<WpSpinner :size="48" />' }),
}

export const LoadingBlock: Story = {
  render: () => ({
    components: { WpSpinner },
    template: `
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:56px 24px; text-align:center;">
        <WpSpinner :size="40" />
        <p style="font-size:0.9375rem; font-weight:700; margin:0;">Chargement…</p>
      </div>
    `,
  }),
}
