import { describe, it, expect, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { createPointerGuard, type PointerHost } from '../src/utils/pointer-safe'

/**
 * Le garde qui empêche un formulaire de perdre le clic d'envoi.
 *
 * ⚠️ CE QUI EST TESTÉ N'EST PAS UN CONFORT, C'EST UN BOUTON MORT. Mesuré le
 * 2026-08-28 sur waypoint360.eu : le message « ce numéro ne semble pas valide »
 * s'insérait à l'appui sur « Envoyer », le bouton descendait de 22 px (bureau)
 * ou 66 px (mobile), le relâchement tombait à côté et le navigateur n'émettait
 * AUCUN `click`. Rien ne partait, rien ne s'affichait.
 */

/** Un hôte de pacotille : pas de DOM, on déclenche les événements à la main. */
function fauxHote() {
  const abonnes: Record<string, Array<() => void>> = {}
  const host: PointerHost = {
    addEventListener(type, listener) { (abonnes[type] ??= []).push(listener) },
    removeEventListener(type, listener) {
      abonnes[type] = (abonnes[type] ?? []).filter(f => f !== listener)
    },
  }
  return {
    host,
    declencher(type: string) { for (const fn of [...(abonnes[type] ?? [])]) fn() },
    /** Le geste complet d'un pointeur qui aboutit à un clic. */
    async cliquer() {
      this.declencher('pointerdown')
      this.declencher('pointerup')
      this.declencher('click')
      await tick()
    },
  }
}

/** Laisse passer une macrotâche — le garde repousse d'un `setTimeout(0)`. */
const tick = () => new Promise(resolve => setTimeout(resolve, 0))

describe('garde de pointeur', () => {
  it('exécute tout de suite quand aucun pointeur n’est appuyé', () => {
    const { host } = fauxHote()
    const garde = createPointerGuard(host)
    let fait = false
    garde.runAfterPointerRelease(() => { fait = true })
    // Le cas du clavier : tabuler d'un champ à l'autre ne doit rien retarder.
    expect(fait).toBe(true)
  })

  it('ordre SOURIS — retient du `pointerdown` au `click`', async () => {
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    declencher('pointerdown')

    let fait = false
    garde.runAfterPointerRelease(() => { fait = true })   // le `blur` de la souris
    expect(fait).toBe(false)          // ⬅️ l'instant décisif : le bouton ne bouge pas

    declencher('pointerup')
    await tick()
    // ⚠️ TOUJOURS PAS. Le `click` est émis après, et sa cible se décide à ce
    // moment-là : rendre la main ici laisserait le tactile cassé.
    expect(fait).toBe(false)

    declencher('click')
    await tick()
    expect(fait).toBe(true)
  })

  it('ordre TACTILE — le `blur` arrive APRÈS le relâchement et doit être retenu quand même', async () => {
    // ⚠️ C'EST L'ORDRE QUI A FAIT MANQUER LA CIBLE. Mesuré au doigt sur la
    // build du site : relâchement à 798 ms, `blur` à 799, `click` à 801. Un
    // garde qui se croit libéré au `pointerup` exécute le `blur` tout de suite,
    // le bouton descend, et le `click` tombe sur le formulaire.
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    declencher('pointerdown')
    declencher('pointerup')            // ⬅️ AVANT le blur, contrairement à la souris

    let fait = false
    garde.runAfterPointerRelease(() => { fait = true })
    expect(fait).toBe(false)

    declencher('click')
    await tick()
    expect(fait).toBe(true)
  })

  it('exécute quand même si aucun clic ne suit le relâchement', async () => {
    // Un glissé hors de la cible, une sélection de texte : le geste ne produit
    // aucun clic. Sans ce filet, le message d'erreur ne paraîtrait jamais.
    vi.useFakeTimers()
    try {
      const { host, declencher } = fauxHote()
      const garde = createPointerGuard(host)
      declencher('pointerdown')
      let fait = false
      garde.runAfterPointerRelease(() => { fait = true })
      declencher('pointerup')
      await vi.advanceTimersByTimeAsync(500)
      expect(fait).toBe(true)
      expect(garde.isGestureActive()).toBe(false)
    } finally {
      vi.useRealTimers()
    }
  })

  it('n’exécute que le dernier état voulu, dans l’ordre d’enregistrement', async () => {
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    declencher('pointerdown')
    const ordre: number[] = []
    garde.runAfterPointerRelease(() => ordre.push(1))
    garde.runAfterPointerRelease(() => ordre.push(2))
    declencher('pointerup')
    declencher('click')
    await tick()
    expect(ordre).toEqual([1, 2])
  })

  it('libère aussi sur `pointercancel`', async () => {
    // Un glissé interprété comme défilement sur mobile : le geste est annulé,
    // il n'y aura pas de `pointerup`. Sans cette reprise, le message d'erreur
    // ne s'afficherait plus JAMAIS.
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    declencher('pointerdown')
    let fait = false
    garde.runAfterPointerRelease(() => { fait = true })
    declencher('pointercancel')
    declencher('click')
    await tick()
    expect(fait).toBe(true)
  })

  it('ne reste pas bloqué si un relâchement se perd hors de la fenêtre', async () => {
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    declencher('pointerdown')
    let fait = false
    garde.runAfterPointerRelease(() => { fait = true })
    // Aucun `pointerup` : le doigt est relâché hors de la page. Le geste suivant
    // doit purger l'attente, sinon le champ reste muet pour toujours.
    declencher('pointerdown')
    await tick()
    expect(fait).toBe(true)
  })

  it('rend l’état du geste, pour le diagnostic', async () => {
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    expect(garde.isGestureActive()).toBe(false)
    declencher('pointerdown')
    expect(garde.isGestureActive()).toBe(true)
    declencher('pointerup')
    // Le geste n'est PAS fini au relâchement : le `click` n'est pas encore émis.
    expect(garde.isGestureActive()).toBe(true)
    declencher('click')
    await tick()
    expect(garde.isGestureActive()).toBe(false)
  })
})

describe('la pose du garde partagé', () => {
  /**
   * ⚠️ CE GARDE A COÛTÉ UNE VERSION. La première écriture posait les écouteurs
   * au PREMIER APPEL. Or le premier appel vient d'un `blur`, et le `blur`
   * arrive après le `pointerdown` qu'il s'agit justement d'observer : le garde
   * naissait en croyant qu'aucun pointeur n'était appuyé, exécutait tout de
   * suite, et reproduisait mot pour mot le défaut qu'il corrige. Les six tests
   * ci-dessus étaient verts — ils construisent le garde à la main, donc avant
   * l'événement.
   *
   * Le contrôle est textuel faute de mieux : on ne peut pas observer un effet
   * de module depuis un test qui a déjà importé ce module.
   */
  it('n’est pas paresseuse : `runAfterPointerRelease` ne construit rien', () => {
    const source = readFileSync(new URL('../src/utils/pointer-safe.ts', import.meta.url), 'utf-8')
    const corps = source.slice(source.indexOf('export function runAfterPointerRelease'))
    expect(corps).not.toContain('createPointerGuard')
  })

  it('ne pose rien hors navigateur — le module est évalué au rendu serveur', () => {
    const source = readFileSync(new URL('../src/utils/pointer-safe.ts', import.meta.url), 'utf-8')
    expect(source).toContain("typeof document === 'undefined'")
  })
})
