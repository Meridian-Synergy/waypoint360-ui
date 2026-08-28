/**
 * Ne jamais déplacer la mise en page sous un pointeur déjà appuyé.
 *
 * ⚠️ LE DÉFAUT QUE CECI CORRIGE EST TOTAL ET MUET. Un navigateur n'émet un
 * `click` que si l'appui et le relâchement tombent sur le même élément. Un
 * champ qui valide au `blur` insère son message d'erreur à l'instant PRÉCIS de
 * l'appui sur le bouton d'envoi : ce qui est en dessous descend, le
 * relâchement tombe à côté, aucun `click` n'est émis. Le bouton paraît MORT —
 * pas de message, pas de requête, pas de trace côté serveur.
 *
 * Mesuré le 2026-08-28 sur le formulaire de revendication de waypoint360.eu :
 * `mousedown` sur le bouton, `mouseup` sur le formulaire, aucun `submit`. Le
 * bouton descendait de 22 px sur bureau, de 66 px sur mobile. Seul « Annuler »
 * répondait — il ne déclenche aucune validation. Un opérateur a conclu que le
 * formulaire était cassé, et il avait raison.
 *
 * ⚠️ RÉSERVER LA PLACE DU MESSAGE NE SUFFIT PAS. Sa hauteur dépend de la
 * largeur de l'écran et de la langue : la même phrase tient sur 1 ligne à
 * 1280 px et sur 4 à 390 px. On ne peut pas la connaître d'avance. C'est donc
 * l'INSTANT du changement qu'on déplace, jamais la mise en page.
 *
 * ⚠️ `relatedTarget` du `blur` NE PEUT PAS servir à détecter le cas : Safari,
 * et iOS surtout, ne donnent pas le focus à un bouton au toucher — le champ
 * perd le focus avec `relatedTarget` à `null`, exactement là où l'écart est le
 * plus grand. On suit donc l'état du pointeur, jamais celui du focus.
 */

/**
 * Ce qu'il faut savoir faire pour poser le garde — `document` en production.
 * Décrit au plus juste pour qu'un test puisse fournir un hôte de pacotille sans
 * dépendre d'un DOM.
 */
export interface PointerHost {
  addEventListener(type: string, listener: () => void, capture?: boolean): void
}

export interface PointerGuard {
  /**
   * Exécute `fn` tout de suite si aucun pointeur n'est appuyé, sinon après le
   * relâchement.
   */
  runAfterPointerRelease: (fn: () => void) => void
  /** Pour les tests et le diagnostic. */
  isPointerDown: () => boolean
}

export function createPointerGuard(host: PointerHost): PointerGuard {
  let pointerDown = false
  let pending: Array<() => void> = []

  function flush() {
    if (!pending.length) return
    const fns = pending
    pending = []
    // ⚠️ APRÈS le relâchement, pas pendant. La cible du `click` se déduit de
    // l'appui et du relâchement DÉJÀ émis : une fois `pointerup` passé, plus
    // rien de ce qu'on écrit ne peut la changer. Le `setTimeout` laisse en
    // outre `mouseup` puis `click` partir avant qu'on touche au DOM.
    setTimeout(() => { for (const fn of fns) fn() }, 0)
  }

  // En capture : un `stopPropagation` d'un composant tiers ne doit pas rendre
  // le garde aveugle — il resterait bloqué à « appuyé » et le message
  // n'apparaîtrait plus jamais.
  host.addEventListener('pointerdown', () => {
    // Filet : un geste dont le relâchement s'est perdu (hors fenêtre, capture
    // volée) ne doit pas retenir les messages en attente indéfiniment.
    flush()
    pointerDown = true
  }, true)

  const release = () => { pointerDown = false; flush() }
  host.addEventListener('pointerup', release, true)
  host.addEventListener('pointercancel', release, true)

  return {
    runAfterPointerRelease(fn) {
      if (!pointerDown) { fn(); return }
      pending.push(fn)
    },
    isPointerDown: () => pointerDown,
  }
}

/**
 * ⚠️ POSÉ À L'IMPORT, JAMAIS AU PREMIER APPEL. Une pose paresseuse ne peut pas
 * marcher : le premier appel vient d'un `blur`, et le `blur` arrive APRÈS le
 * `pointerdown` qu'il s'agit d'observer. Le garde naissait donc en croyant
 * qu'aucun pointeur n'était appuyé et exécutait tout de suite — exactement le
 * défaut qu'il corrige. Vérifié le 2026-08-28 sur la build du site : le
 * `pointerup` tombait encore sur le formulaire au lieu du bouton.
 *
 * `document` est absent au rendu serveur : le module y est évalué sans rien
 * poser, et `runAfterPointerRelease` exécute alors immédiatement — il n'y a ni
 * pointeur ni mise en page à protéger.
 */
const shared: PointerGuard | null =
  typeof document === 'undefined' ? null : createPointerGuard(document)

/** Exécute `fn` sans déplacer la mise en page sous un pointeur appuyé. */
export function runAfterPointerRelease(fn: () => void): void {
  if (!shared) { fn(); return }
  shared.runAfterPointerRelease(fn)
}
