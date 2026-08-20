import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Les couleurs de statut servent de couleur de TEXTE — message d'erreur d'un
 * champ, compteur de caractères, corps d'une alerte. Le seuil applicable est
 * donc 4,5:1 (WCAG AA, texte normal), pas 3:1.
 *
 * ⚠️ Ce défaut ne se voit pas : une couleur trop pâle s'AFFICHE, elle ne se lit
 * simplement pas. Mesuré le 2026-08-20, les trois jetons échouaient sur blanc —
 * success 2,28:1, warning 2,15:1, error 3,76:1 — et l'erreur échouait AUSSI sur
 * navy (3,66:1), donc dans les deux thèmes à la fois. Un message d'erreur
 * illisible est le pire endroit où économiser du contraste : c'est celui qu'on
 * lit quand quelque chose ne va déjà pas.
 *
 * On calcule plutôt qu'on ne regarde, parce que regarder ne l'attrape pas.
 */
const CSS = readFileSync(join(import.meta.dirname, '..', 'src', 'tokens', 'tokens.css'), 'utf8')

const SURFACE_CLAIRE = '#FFFFFF'
const SURFACE_SOMBRE = '#1B2B56'   // --wp-color-navy, la surface de l'application en sombre
const SEUIL_TEXTE    = 4.5

function luminance(hex: string): number {
  const c = hex.replace('#', '')
  const [r, g, b] = [0, 2, 4].map(i => parseInt(c.slice(i, i + 2), 16) / 255)
  const lin = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
  return 0.2126 * lin(r!) + 0.7152 * lin(g!) + 0.0722 * lin(b!)
}

function contrast(a: string, b: string): number {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m)
  return (x! + 0.05) / (y! + 0.05)
}

/** Lit un jeton dans le bloc demandé : `:root` (clair) ou `[data-theme="dark"]`. */
function token(name: string, scope: 'light' | 'dark'): string {
  const block = scope === 'dark'
    ? CSS.slice(CSS.indexOf('[data-theme="dark"]'))
    : CSS.slice(0, CSS.indexOf('[data-theme="dark"]'))
  const m = new RegExp(`--wp-color-${name}:\\s*(#[0-9a-fA-F]{6})`).exec(block)
  expect(m, `jeton --wp-color-${name} introuvable en thème ${scope}`).not.toBeNull()
  return m![1]!
}

describe('couleurs de statut — lisibles dans les DEUX thèmes', () => {
  it.each(['success', 'warning', 'error'])('%s se lit sur une surface claire', (name) => {
    const ratio = contrast(token(name, 'light'), SURFACE_CLAIRE)
    expect(ratio, `${name} sur blanc : ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(SEUIL_TEXTE)
  })

  it.each(['success', 'warning', 'error'])('%s se lit sur une surface sombre', (name) => {
    const ratio = contrast(token(name, 'dark'), SURFACE_SOMBRE)
    expect(ratio, `${name} sur navy : ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(SEUIL_TEXTE)
  })

  it('le thème sombre redéfinit BIEN les trois', () => {
    // Un jeton oublié dans le bloc sombre hériterait de la valeur claire, et
    // c'est précisément le cas qui produit du texte foncé sur fond foncé.
    const dark = CSS.slice(CSS.indexOf('[data-theme="dark"]'))
    for (const name of ['success', 'warning', 'error']) {
      expect(dark, `--wp-color-${name} manque au thème sombre`).toContain(`--wp-color-${name}`)
    }
  })
})
