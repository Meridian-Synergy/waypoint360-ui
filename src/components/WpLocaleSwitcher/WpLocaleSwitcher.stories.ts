import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, userEvent, within } from 'storybook/test'
import WpLocaleSwitcher from './WpLocaleSwitcher.vue'

const meta: Meta<typeof WpLocaleSwitcher> = {
  title: 'Components/WpLocaleSwitcher',
  component: WpLocaleSwitcher,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof WpLocaleSwitcher>

const locales = [
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'en', name: 'English',  flag: 'gb' },
  { code: 'de', name: 'Deutsch',  flag: 'de' },
  { code: 'es', name: 'Español',  flag: 'es' },
]

export const Default: Story = {
  args: { locales, currentLocale: 'fr' },
  parameters: { backgrounds: { default: 'dark' } },
}

export const Light: Story = {
  args: { locales, currentLocale: 'en', theme: 'light' },
  parameters: { backgrounds: { default: 'light' } },
}

// Le sélecteur s'ouvrait au clavier mais ne se choisissait PAS : les options
// étaient des `<li>` sans tabindex ni gestion des touches. Sur les trois produits,
// changer de langue exigeait une souris.
export const KeyboardSelection: Story = {
  args: { locales, currentLocale: 'fr' },
  parameters: { backgrounds: { default: 'dark' } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button')

    trigger.focus()
    await userEvent.keyboard('{ArrowDown}')

    const listbox = canvas.getByRole('listbox')
    await expect(listbox).toHaveFocus()

    // On entre sur la langue COURANTE, pas en tête de liste : avec 29 langues,
    // repartir du haut coûte le trajet entier.
    const options = canvas.getAllByRole('option')
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[0].id)

    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[2].id)

    await userEvent.keyboard('{Enter}')
    await expect(args.onSelect).toHaveBeenCalledWith('de')

    // Le focus revient au déclencheur : la liste vient de disparaître, le laisser
    // filer au `<body>` perdrait l'utilisateur au clavier.
    await expect(trigger).toHaveFocus()
  },
}

// Échap doit annuler sans rien choisir — sinon toute exploration de la liste
// devient un engagement.
export const EscapeCancels: Story = {
  args: { locales, currentLocale: 'fr' },
  parameters: { backgrounds: { default: 'dark' } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button')

    trigger.focus()
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByRole('listbox')).toBeInTheDocument()

    await userEvent.keyboard('{ArrowDown}{Escape}')

    await expect(canvas.queryByRole('listbox')).toBeNull()
    await expect(args.onSelect).not.toHaveBeenCalled()
    await expect(trigger).toHaveFocus()
  },
}

// Le rebouclage évite l'impasse : arrivé en bas, la flèche suivante repart en
// haut plutôt que de ne rien faire.
export const WrapsAround: Story = {
  args: { locales, currentLocale: 'fr' },
  parameters: { backgrounds: { default: 'dark' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    canvas.getByRole('button').focus()
    await userEvent.keyboard('{ArrowDown}')

    const listbox = canvas.getByRole('listbox')
    const options = canvas.getAllByRole('option')

    await userEvent.keyboard('{End}')
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[3].id)

    await userEvent.keyboard('{ArrowDown}')
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[0].id)

    await userEvent.keyboard('{ArrowUp}')
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[3].id)
  },
}
