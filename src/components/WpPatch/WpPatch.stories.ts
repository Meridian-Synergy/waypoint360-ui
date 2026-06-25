import type { Meta, StoryObj } from '@storybook/vue3'
import WpPatch from './WpPatch.vue'

const meta: Meta<typeof WpPatch> = {
  title: 'Community/WpPatch',
  component: WpPatch,
  tags: ['autodocs'],
  argTypes: {
    shape:  { control: 'select', options: ['circle', 'shield', 'rocker', 'rosette', 'hexagon'] },
    tier:   { control: 'select', options: ['none', 'bronze', 'silver', 'gold', 'platinum'] },
    accent: { control: 'color' },
    icon:   { control: 'select', options: [undefined, 'propeller', 'takeoff', 'medal', 'compass', 'globe', 'route', 'stopwatch', 'mountain', 'flame', 'check', 'double_check', 'clock', 'user_plus', 'users', 'podium', 'verified', 'heart', 'crown', 'wings', 'wingman', 'star', 'sunrise', 'moon', 'flag', 'rocket', 'trophy', 'calendar'] },
    count:  { control: 'number' },
    size:   { control: 'number' },
    locked: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof WpPatch>

// --- One per category shape, with its representative emblem ---

export const FlightCircle: Story = {
  name: 'Circle — flights',
  args: { shape: 'circle', tier: 'gold', icon: 'wings', bannerText: 'Aviator', count: 100, name: 'Aviator', description: '100 vols enregistrés.' },
}

export const CertShield: Story = {
  name: 'Shield — certification',
  args: { shape: 'shield', tier: 'silver', icon: 'check', bannerText: 'Certified', name: 'Certified Pilot', description: 'Au moins une certification UE.' },
}

export const GeoRocker: Story = {
  name: 'Rocker — geography (country flag)',
  args: { shape: 'rocker', tier: 'bronze', flag: 'fr', bannerText: 'France', name: 'France Explorer', description: 'Au moins un vol en France.' },
}

export const GeoRockerCountries: Story = {
  name: 'Rocker — flag set (collectible)',
  render: (args) => ({
    components: { WpPatch },
    setup: () => ({ args, countries: [
      { flag: 'fr', label: 'France' },
      { flag: 'be', label: 'Belgique' },
      { flag: 'ch', label: 'Suisse' },
      { flag: 'es', label: 'España' },
    ] }),
    template: `
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="c in countries" :key="c.flag" v-bind="args" :flag="c.flag" :banner-text="c.label" />
      </div>`,
  }),
  args: { shape: 'rocker', tier: 'bronze', size: 88 },
}

export const SocialRosette: Story = {
  name: 'Rosette — community',
  args: { shape: 'rosette', tier: 'gold', icon: 'heart', bannerText: 'Supporter', name: 'Supporter', description: 'Soutien mensuel à la communauté.' },
}

export const EventHexagon: Story = {
  name: 'Hexagon — event',
  args: { shape: 'hexagon', tier: 'platinum', icon: 'flag', bannerText: '2026', name: '2026 Pioneer', description: 'Inscrit en 2026.' },
}

// --- Tier ladder ---

export const TierLadder: Story = {
  name: 'Tiers — bronze → platinum',
  render: (args) => ({
    components: { WpPatch },
    setup: () => ({ args, tiers: ['none', 'bronze', 'silver', 'gold', 'platinum'] as const }),
    template: `
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <WpPatch v-for="t in tiers" :key="t" v-bind="args" :tier="t" :banner-text="t" />
      </div>`,
  }),
  args: { shape: 'circle', icon: 'star', count: 50 },
}

// --- Locked state (unlocked vs lapsed recurring supporter) ---

export const Locked: Story = {
  name: 'Locked — greyed',
  args: { shape: 'rosette', tier: 'gold', icon: 'heart', bannerText: 'Supporter', locked: true, name: 'Supporter (lapsed)' },
}

// --- Small size (UI inline) ---

export const Small: Story = {
  name: 'Small — 40px',
  args: { shape: 'circle', tier: 'gold', icon: 'propeller', size: 40 },
}

// --- Dark background ---

// --- Category accent (overrides the tier ring color) ---

export const CategoryAccents: Story = {
  name: 'Category accents',
  render: (args) => ({
    components: { WpPatch },
    setup: () => ({ args, cats: [
      { shape: 'circle',  icon: 'propeller', accent: '#D4AF37' },
      { shape: 'rocker',  icon: 'globe',     accent: '#00AAEF' },
      { shape: 'shield',  icon: 'check',     accent: '#22c55e' },
      { shape: 'rosette', icon: 'star',      accent: '#8b5cf6' },
      { shape: 'hexagon', icon: 'flag',      accent: '#f59e0b' },
    ] }),
    template: `
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="(c, i) in cats" :key="i" v-bind="args" :shape="c.shape" :icon="c.icon" :accent="c.accent" />
      </div>`,
  }),
  args: { tier: 'none' },
}

// --- Full icon library ---

export const IconLibrary: Story = {
  name: 'Icon library',
  render: (args) => ({
    components: { WpPatch },
    setup: () => ({ args, icons: [
      'propeller', 'takeoff', 'medal', 'compass', 'globe', 'route', 'stopwatch', 'mountain', 'flame',
      'check', 'double_check', 'clock', 'user_plus', 'users', 'podium', 'verified',
      'heart', 'crown', 'wings', 'wingman', 'star', 'sunrise', 'moon', 'flag', 'rocket', 'trophy', 'calendar',
    ] }),
    template: `
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <div v-for="ic in icons" :key="ic" style="text-align:center; width:88px;">
          <WpPatch v-bind="args" :icon="ic" :size="72" />
          <div style="font:11px monospace; margin-top:4px;">{{ ic }}</div>
        </div>
      </div>`,
  }),
  args: { shape: 'circle', tier: 'none' },
}

export const OnDark: Story = {
  name: 'On dark background',
  args: { shape: 'shield', tier: 'gold', icon: 'check', bannerText: 'Full Rating' },
  parameters: { backgrounds: { default: 'dark' } },
}
