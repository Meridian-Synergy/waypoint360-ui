import { describe, it, expect } from 'vitest'
import { wpCharCountLevel, WP_CHAR_WARN_RATIO } from '../src/utils/char-count'

/**
 * Un `maxlength` s'atteint EN SILENCE : le navigateur cesse d'accepter les
 * frappes, sans rien dire. Constaté le 2026-08-17 sur la description d'un
 * profil public, arrêtée net à 500/500.
 *
 * Le seuil vit ici plutôt que dans chaque application : deux quotas qui
 * divergent, c'est un compteur qui ment.
 */
describe('wpCharCountLevel', () => {
  it('reste neutre loin du quota', () => {
    expect(wpCharCountLevel(0, 500)).toBe('ok')
    expect(wpCharCountLevel(399, 500)).toBe('ok')
  })

  it('prévient à 80 % — assez tôt pour reformuler', () => {
    expect(WP_CHAR_WARN_RATIO).toBe(0.8)
    expect(wpCharCountLevel(400, 500)).toBe('warn')
    expect(wpCharCountLevel(499, 500)).toBe('warn')
  })

  it('signale la limite atteinte', () => {
    expect(wpCharCountLevel(500, 500)).toBe('max')
  })

  // Une valeur enregistrée avant que la limite existe peut la dépasser : elle
  // doit rester « max », jamais retomber en neutre.
  it('traite un dépassement comme une limite atteinte', () => {
    expect(wpCharCountLevel(812, 500)).toBe('max')
  })

  it('ne divise pas par zéro sans quota', () => {
    expect(wpCharCountLevel(120, 0)).toBe('ok')
  })
})
