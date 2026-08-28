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
  removeEventListener(type: string, listener: () => void, capture?: boolean): void
}

export interface PointerGuard {
  /**
   * Exécute `fn` tout de suite hors geste de pointeur, sinon à la fin du geste
   * — c'est-à-dire après le `click`, jamais avant.
   */
  runAfterPointerRelease: (fn: () => void) => void
  /** Un geste de pointeur est en cours. Pour les tests et le diagnostic. */
  isGestureActive: () => boolean
}

export function createPointerGuard(host: PointerHost): PointerGuard {
  let gestureActive = false
  let pending: Array<() => void> = []
  let armed = false

  function flushNow() {
    if (!pending.length) return
    const fns = pending
    pending = []
    for (const fn of fns) fn()
  }

  /**
   * ⚠️ LA FENÊTRE DE DANGER VA DU `pointerdown` AU `click`, PAS AU `pointerup`.
   * Les deux ordres d'événements diffèrent, et c'est ce qui a fait manquer la
   * cible deux fois :
   *
   * - à la souris : `pointerdown`, `blur`, `pointerup`, `mouseup`, `click` ;
   * - au doigt : `pointerdown`, `pointerup`, **puis** `blur`, puis `click`.
   *
   * Mesuré sur la build du site, au doigt : relâchement à 798 ms, `blur` à
   * 799, `click` à 801. Un garde qui rend la main au `pointerup` croit le geste
   * fini alors que le `blur` n'a pas encore eu lieu : il exécute tout de suite,
   * le bouton descend, et le `click` tombe sur le formulaire. La souris était
   * réparée, le tactile restait cassé — sur un annuaire consulté au téléphone,
   * c'est le cas le plus fréquent, et celui où le message fait 66 px au lieu
   * de 22.
   *
   * Le `click` est donc le seul repère sûr : sa cible est arrêtée à son
   * émission. On rend la main une macrotâche après, pour laisser l'action par
   * défaut — la soumission du formulaire — se produire d'abord.
   */
  const DELAI_SANS_CLIC_MS = 400

  function armer() {
    if (armed) return
    armed = true
    const liberer = () => {
      if (!armed) return
      armed = false
      gestureActive = false
      host.removeEventListener('click', liberer, true)
      clearTimeout(minuteur)
      setTimeout(flushNow, 0)
    }
    // Filet : un geste qui ne produit aucun clic — glissé hors de la cible,
    // sélection de texte. Sans lui, le message n'apparaîtrait jamais.
    // Posé AVANT l'écoute du clic : `liberer` s'y réfère, et un minuteur ne
    // peut pas se déclencher au milieu de ces deux lignes.
    const minuteur = setTimeout(liberer, DELAI_SANS_CLIC_MS)
    host.addEventListener('click', liberer, true)
  }

  // En capture : un `stopPropagation` d'un composant tiers ne doit pas rendre
  // le garde aveugle — il resterait bloqué en « geste en cours » et le message
  // n'apparaîtrait plus jamais.
  host.addEventListener('pointerdown', () => {
    // Filet : un geste dont la suite s'est perdue (hors fenêtre, capture volée)
    // ne doit pas retenir les messages en attente indéfiniment.
    flushNow()
    gestureActive = true
  }, true)

  // ⚠️ On arme même sans rien en attente : au doigt, le `blur` qui remplit la
  // file arrive APRÈS le relâchement.
  const relacher = () => armer()
  host.addEventListener('pointerup', relacher, true)
  host.addEventListener('pointercancel', relacher, true)

  return {
    runAfterPointerRelease(fn) {
      if (!gestureActive) { fn(); return }
      pending.push(fn)
    },
    isGestureActive: () => gestureActive,
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
