import { describe, it, expect } from 'vitest'
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
  }
  return {
    host,
    declencher(type: string) { for (const fn of abonnes[type] ?? []) fn() },
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

  it('retient tant que le pointeur est appuyé, puis exécute après le relâchement', async () => {
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    declencher('pointerdown')

    let fait = false
    garde.runAfterPointerRelease(() => { fait = true })
    expect(fait).toBe(false)          // ⬅️ l'instant décisif : le bouton ne bouge pas

    declencher('pointerup')
    expect(fait).toBe(false)          // même après `pointerup`, on laisse partir `mouseup` puis `click`
    await tick()
    expect(fait).toBe(true)
  })

  it('n’exécute que le dernier état voulu, dans l’ordre d’enregistrement', async () => {
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    declencher('pointerdown')
    const ordre: number[] = []
    garde.runAfterPointerRelease(() => ordre.push(1))
    garde.runAfterPointerRelease(() => ordre.push(2))
    declencher('pointerup')
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

  it('rend l’état du pointeur, pour le diagnostic', () => {
    const { host, declencher } = fauxHote()
    const garde = createPointerGuard(host)
    expect(garde.isPointerDown()).toBe(false)
    declencher('pointerdown')
    expect(garde.isPointerDown()).toBe(true)
    declencher('pointerup')
    expect(garde.isPointerDown()).toBe(false)
  })
})
