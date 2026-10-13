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
 * Legacy layout (`euTitle` / `nationalTitle`), kept for backward compatibility.
 *
 * ⛔ CORRECTED 2026-10-13: this story used to say the CATS « exists only in
 * France ». It does not: the CATS is the EASA theoretical exam for standard
 * scenarios (Reg. (EU) 2019/947, Annex 1 Appendix A), per the DGAC's STS guide.
 * New callers should use `groups` (see `ByAuthority`).
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

/**
 * Titles grouped by issuing authority. The caller decides the order and which
 * groups fold under « Other countries »; a folded group unfolds by itself when
 * one of its titles is held (here the Part 107), so a held title is never hidden.
 */
export const ByAuthority: Story = {
  args: {
    modelValue: { a1_a3: true, part_107: { held: true, obtained: '2025-03-01', country: 'US' } },
    labels: { a1_a3: '', a2_cofc: '', cats: '', sts_01: '', sts_02: '' },
    groups: [
      {
        id: 'easa', title: 'Europe — EASA',
        hint: 'Issued in France by the DGAC, valid in the EU, Switzerland, Norway, Iceland and Liechtenstein',
        labels: {
          a1_a3: 'A1/A3: Open subcategories', a2_cofc: 'A2 CofC: Certificate of competency',
          cats: 'CATS: Theoretical knowledge, standard scenarios', sts_01: 'STS-01: Standard scenario VLOS', sts_02: 'STS-02: Standard scenario BVLOS',
        },
      },
      { id: 'trade', title: 'Trade permits (France)', labels: { certibiocide: 'Certibiocide', certiphyto: 'Certiphyto' } },
      { id: 'faa', title: 'United States — FAA', labels: { part_107: 'Part 107: Remote pilot certificate' }, collapsed: true },
      { id: 'tc', title: 'Canada — Transport Canada', labels: { tc_basic: 'Basic operations', tc_advanced: 'Advanced operations' }, collapsed: true },
    ],
    othersLabel: 'Other countries',
    withDates: true,
  },
}
