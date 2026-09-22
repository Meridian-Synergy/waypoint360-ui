import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * ⛔ UN CARROUSEL QUI TOURNE TOUT SEUL EST UN DÉFAUT D'ACCESSIBILITÉ, pas un
 * effet. Il déplace la cible sous le doigt, coupe la lecture de qui lit
 * lentement et déclenche les troubles vestibulaires. Le WCAG 2.2 l'encadre au
 * critère 2.2.2. Le composant s'en épargne en ne démarrant jamais — et rien
 * d'autre que ce garde n'empêcherait quelqu'un d'ajouter un `setInterval` un
 * jour où « ça ferait plus vivant ».
 *
 * ⚠️ LES COMMENTAIRES SONT RETIRÉS AVANT LA RECHERCHE. Ce fichier-ci parle de
 * `setInterval` ; le composant en parle aussi dans sa prose. Un garde qui lit
 * les commentaires trouve le mot qu'il cherche dans la phrase qui explique
 * pourquoi il n'est pas là, et reste vert quoi qu'il arrive.
 */
const SOURCE = readFileSync(
  join(process.cwd(), 'src', 'components', 'WpCarousel', 'WpCarousel.vue'),
  'utf-8',
)

/** Le code seul : commentaires de bloc, de ligne et de gabarit retirés. */
const CODE = SOURCE
  .replace(/\/\*[\s\S]*?\*\//g, ' ')
  .replace(/^\s*\/\/.*$/gm, ' ')
  .replace(/<!--[\s\S]*?-->/g, ' ')

describe('WpCarousel', () => {
  it('le dépouillement des commentaires laisse du code', () => {
    // Sans ce contrôle, une expression trop gourmande viderait la source et
    // tous les tests suivants passeraient en ne lisant rien.
    expect(CODE.length).toBeGreaterThan(1200)
    expect(CODE).toContain('scrollBy')
  })

  it('ne démarre aucune minuterie', () => {
    expect(CODE).not.toMatch(/setInterval|setTimeout|requestAnimationFrame/)
  })

  it('laisse le rail atteignable au clavier', () => {
    // Un conteneur défilant sans `tabindex` ne défile pas aux flèches : le
    // contenu hors écran n'existe alors que pour la souris et le doigt.
    expect(CODE).toMatch(/class="wp-carousel__rail"[\s\S]{0,200}tabindex="0"/)
  })

  it('se retire entièrement quand il n’a rien à montrer', () => {
    expect(CODE).toMatch(/<section\s+v-if="!vide"/)
  })

  it('respecte une demande de mouvement réduit', () => {
    // La demande est faite en JavaScript (`scrollBy`), donc une règle CSS
    // `scroll-behavior` ne serait jamais consultée.
    expect(CODE).toContain('prefers-reduced-motion')
    expect(CODE).toMatch(/behavior:\s*douceur\(\)/)
  })
})
