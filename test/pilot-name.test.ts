import { describe, it, expect } from 'vitest'

// ⚠️ Seule la RÈGLE vit ici. Les tests qui vérifiaient qu'un fichier précis de la
// vitrine l'utilise bien restent dans la vitrine : ils portent sur un consommateur,
// pas sur le design system, et le DS ne doit pas connaître ses consommateurs.
import { pilotDisplayName, pilotInitials } from '../src/utils/pilot-name'

/**
 * La carte de partage rendait un 500 sur la seule fiche pilote publique en
 * production. Cause mesurée : `first_name.charAt(0)` sur un profil au
 * PSEUDONYME, où l'API renvoie l'état civil à `null`.
 *
 * ⚠️ Le vrai défaut n'est pas le `.charAt(0)`, c'est la DIVERGENCE : la page
 * `/pilote/[slug]` traitait déjà ce cas, la carte ne l'avait jamais appris. Un
 * correctif qui se contenterait de ne plus planter laisserait les deux copies
 * repartir chacune de son côté.
 */
describe('nom affiché d’un pilote', () => {
  it('préfère le pseudonyme à l’état civil', () => {
    expect(pilotDisplayName({ pseudonym: 'Denis58', first_name: 'Denis', last_name: 'Gosset' }))
      .toBe('Denis58')
  })

  it('retombe sur l’état civil quand il n’y a pas de pseudonyme', () => {
    expect(pilotDisplayName({ pseudonym: null, first_name: 'Denis', last_name: 'Gosset' }))
      .toBe('Denis Gosset')
  })

  /** Le cas exact qui rendait 500 : pseudonyme posé, état civil à null. */
  it('ne casse pas quand l’état civil est nul', () => {
    expect(() => pilotInitials({ pseudonym: 'Denis58', first_name: null, last_name: null })).not.toThrow()
    expect(pilotDisplayName({ pseudonym: 'Denis58', first_name: null, last_name: null })).toBe('Denis58')
  })

  /**
   * LE test du lot. Ne plus planter ne suffit pas : replier sur l'état civil
   * publierait « DG » à côté de « Denis58 » — exactement ce que le pseudonyme
   * sert à masquer, et sur une image destinée aux réseaux sociaux.
   */
  it('ne trahit JAMAIS l’état civil sous un pseudonyme', () => {
    const initiales = pilotInitials({ pseudonym: 'Denis58', first_name: 'Denis', last_name: 'Gosset' })
    expect(initiales).toBe('D')
    expect(initiales, 'les initiales portent l’état civil masqué').not.toBe('DG')
  })

  it('rend « ? » plutôt que du vide quand aucun nom n’est connu', () => {
    expect(pilotInitials({ pseudonym: null, first_name: null, last_name: null })).toBe('?')
    expect(pilotInitials(null)).toBe('?')
  })

  it('prend deux initiales au plus, et gère les noms composés', () => {
    expect(pilotInitials({ first_name: 'Jean Pierre', last_name: 'De La Tour' })).toBe('JP')
  })
})

/**
 * Le cliquet : la carte de partage ne doit plus lire l'état civil directement.
 * Une lecture reintroduite y ferait revenir les DEUX défauts d'un coup — le
 * plantage sous pseudonyme, et la fuite si quelqu'un « corrige » avec un `?.`.
 */
