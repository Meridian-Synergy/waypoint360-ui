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
  obtained:     'Obtained on',
  expiresInput: 'Valid until',
  expiresOn:    'Expires on {date}',
  validityInfo: 'Validity: {years} years',
  valid:        'Valid',
  soon:         'Expires soon',
  expired:      'Expired',
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
      a1_a3:   { held: true, obtained: '2022-03-15', country: 'FR' },           // expiry derived from obtention
      a2_cofc: { held: true, obtained: null, expires: '2031-02-18', country: 'BE' }, // explicit expiry from the certificate
      cats:    { held: true, obtained: null, country: 'FR' },                   // held, no date yet
      sts_01:  false,
    },
  },
}

export const Dark: Story = {
  args: { ...WithDates.args },
  parameters: { backgrounds: { default: 'dark' } },
}

/**
 * ⚠️ Deux portées, et c'est le point de l'histoire : A1/A3, A2 CofC, STS-01 et
 * STS-02 sont des titres EASA, identiques dans toute l'Union. Le CATS n'existe
 * qu'en France.
 *
 * On les SÉPARE au lieu de masquer le CATS hors de France : un filtre reposerait
 * sur le pays de l'organisation, champ parfois faux, et priverait de sa case un
 * Français installé à l'étranger. Une étiquette ne coûte qu'une ligne ; un
 * filtre coûte un fait.
 */
export const ParPortee: Story = {
  args: {
    modelValue: { a1_a3: true, cats: { held: true, obtained: '2026-03-01', country: 'FR' } },
    labels: {
      a1_a3: 'A1/A3 (formation de base)', a2_cofc: 'A2 CofC',
      cats: 'CATS', sts_01: 'STS-01', sts_02: 'STS-02',
    },
    euTitle: 'Certifications européennes',
    nationalTitle: 'Certifications nationales',
    withDates: true,
  },
}
