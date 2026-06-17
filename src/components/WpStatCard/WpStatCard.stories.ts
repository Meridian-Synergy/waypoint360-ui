import type { Meta, StoryObj } from '@storybook/vue3'
import WpStatCard from './WpStatCard.vue'

const meta: Meta<typeof WpStatCard> = {
  title: 'Components/WpStatCard',
  component: WpStatCard,
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'dark' } },
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'sky', 'gold', 'warn', 'ok'] },
  },
}
export default meta

type Story = StoryObj<typeof WpStatCard>

export const Neutral: Story = {
  args: {
    label: 'Missions',
    value: 42,
    sub: '128 au total',
    link: 'Voir tout →',
    tone: 'neutral',
  },
}

export const Gold: Story = {
  args: {
    label: 'Heures de vol',
    value: '128 h',
    sub: '+12 % ce mois',
    link: 'Voir tout →',
    tone: 'gold',
  },
}

export const Sky: Story = {
  args: {
    label: 'Utilisateurs',
    value: 12,
    sub: '8 certifiés',
    link: 'Voir tout →',
    tone: 'sky',
  },
}

export const Warn: Story = {
  args: {
    label: 'Certifications',
    value: 3,
    sub: 'expirent sous 30 jours',
    link: 'Voir tout →',
    tone: 'warn',
  },
}

export const Ok: Story = {
  args: {
    label: 'Conformité',
    value: '100 %',
    sub: 'tous les drones à jour',
    tone: 'ok',
  },
}

export const Loading: Story = {
  args: {
    label: 'Missions',
    value: '–',
    sub: 'chargement…',
    loading: true,
    tone: 'neutral',
  },
}

export const Static: Story = {
  args: {
    label: 'Drones',
    value: 6,
    sub: '4 actifs',
    tone: 'neutral',
    interactive: false,
  },
}

export const Grid: Story = {
  render: (args) => ({
    components: { WpStatCard },
    setup: () => ({ args }),
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;max-width:780px">
        <WpStatCard label="Heures de vol" :value="'128 h'" sub="+12 % ce mois" link="Voir tout →" tone="gold" />
        <WpStatCard label="Utilisateurs" :value="12" sub="8 certifiés" link="Voir tout →" tone="sky" />
        <WpStatCard label="Missions" :value="42" sub="128 au total" link="Voir tout →" tone="neutral" />
        <WpStatCard label="Certifications" :value="3" sub="expirent sous 30 jours" link="Voir tout →" tone="warn" />
      </div>
    `,
  }),
}
