import type { Meta, StoryObj } from '@storybook/vue3'
import WpCertifications from './WpCertifications.vue'

const labels = {
  a1_a3:   'A1/A3 — Open subcategory',
  a2_cofc: 'A2 CofC — Certificate of competency',
  cats:    'CATS — Certified category',
  sts_01:  'STS-01 — Standard scenario VLOS',
  sts_02:  'STS-02 — Standard scenario BVLOS',
}

const additionalLabels = {
  certibiocide: 'Certibiocide',
  certiphyto:   'Certiphyto',
}

const dateLabels = {
  obtained:  'Obtained on',
  expiresOn: 'Expires on {date}',
  valid:     'Valid',
  soon:      'Expires soon',
  expired:   'Expired',
}

const meta: Meta<typeof WpCertifications> = {
  title: 'Components/WpCertifications',
  component: WpCertifications,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpCertifications>

export const Default: Story = {
  args: {
    title: 'Certifications',
    labels,
    additionalTitle: 'Additional certifications',
    additionalLabels,
    modelValue: { a1_a3: true, a2_cofc: false, certiphyto: true },
  },
}

const countryOptions = [
  { value: 'FR', label: 'France' },
  { value: 'BE', label: 'Belgique' },
  { value: 'LU', label: 'Luxembourg' },
  { value: 'DE', label: 'Allemagne' },
]

export const WithDates: Story = {
  args: {
    title: 'Certifications',
    labels,
    withDates: true,
    validityYears: 5,
    dateLabels,
    withCountry: true,
    countryOptions,
    countryLabel: 'Issued in',
    defaultCountry: 'FR',
    modelValue: {
      a1_a3:   { held: true, obtained: '2022-03-15', country: 'FR' },
      a2_cofc: { held: true, obtained: '2021-01-10', country: 'BE' }, // expired
      cats:    { held: true, obtained: null, country: 'FR' },          // held, no date yet
      sts_01:  false,
    },
  },
}

export const Dark: Story = {
  args: { ...WithDates.args },
  parameters: { backgrounds: { default: 'dark' } },
}
