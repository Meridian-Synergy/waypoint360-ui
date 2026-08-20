import { describe, it, expect } from 'vitest'
import { isEmailShaped, normaliseEmail } from '../src/utils/email'

/**
 * La forme d'une adresse e-mail.
 *
 * ⚠️ VOLONTAIREMENT PERMISSIF. Refuser une adresse valide est PIRE qu'accepter
 * une adresse douteuse : la seconde échouera à l'envoi, avec un rebond qu'on
 * peut voir ; la première empêche quelqu'un de s'inscrire, sans recours et sans
 * trace. Ces tests décrivent donc une forme minimale, pas la RFC 5322.
 */
describe('forme d’une adresse', () => {
  it.each(['jean@exemple.fr', 'j.dupont+drone@sous.domaine.co.uk', 'a@b.io', "o'brien@exemple.ie"])(
    'accepte %s', (v) => expect(isEmailShaped(v)).toBe(true))

  it.each(['jumadrone7', 'jean@', '@exemple.fr', 'jean@exemple', 'jean dupont@exemple.fr', 'jean@@exemple.fr'])(
    'refuse %s', (v) => expect(isEmailShaped(v)).toBe(false))

  it('refuse le vide, sans en faire une erreur ailleurs', () => {
    // Le composant traite le champ vide à part : facultatif n'est pas invalide.
    expect(isEmailShaped('')).toBe(false)
    expect(isEmailShaped(null)).toBe(false)
  })

  it('refuse au-delà de la longueur maximale d’une adresse', () => {
    expect(isEmailShaped('a'.repeat(250) + '@exemple.fr')).toBe(false)
  })
})

describe('normalisation', () => {
  it('abaisse la casse du DOMAINE seulement', () => {
    // ⚠️ La partie locale est sensible à la casse selon la RFC : `Jean.Dupont@`
    // et `jean.dupont@` peuvent désigner deux boîtes. Peu de serveurs en usent,
    // mais abaisser la casse serait réécrire l'adresse de quelqu'un.
    expect(normaliseEmail('Jean.Dupont@EXEMPLE.FR')).toBe('Jean.Dupont@exemple.fr')
  })

  it('retire les espaces autour', () => {
    expect(normaliseEmail('  jean@exemple.fr  ')).toBe('jean@exemple.fr')
  })

  it('rend null sur une chaîne vide, pas une chaîne vide', () => {
    // Un champ facultatif vidé doit repartir à `null` en base, pas à ''.
    expect(normaliseEmail('   ')).toBeNull()
  })

  it('ne casse pas sur une valeur sans arobase', () => {
    // La normalisation n'est pas une validation : elle rend ce qu'on lui donne.
    expect(normaliseEmail('jumadrone7')).toBe('jumadrone7')
  })

  it('gère une arobase dans la partie locale entre guillemets', () => {
    // On coupe sur la DERNIÈRE arobase, pas la première.
    expect(normaliseEmail('"a@b"@EXEMPLE.FR')).toBe('"a@b"@exemple.fr')
  })
})
