import { readFileSync } from 'fs'

/**
 * La géométrie du vêtement et les cotes de pose, partagées par les deux planches.
 *
 * ⛔ ELLE A ÉTÉ EXTRAITE LE JOUR OÙ UNE SECONDE PLANCHE EST APPARUE. La planche
 * de présentation recopiait ces constantes ; une image jolie qui placerait le
 * motif ailleurs que la planche technique ferait mentir l'une des deux, et c'est
 * toujours la jolie qu'on regarde.
 */

export const M = JSON.parse(readFileSync(new URL('../manifest.json', import.meta.url)))
export const g = (n) => {
  const v = M.find((m) => m.key === n)
  if (!v) throw new Error(`clé inconnue dans le manifeste : ${n}`)
  return v
}

/**
 * ⛔ LA SILHOUETTE ET LES COTES ÉTAIENT INVENTÉES. Cette planche a été posée le
 * 2026-08-22 avec un dos à 90 mm sous l'encolure, un cœur à 190 mm sous l'épaule
 * et un vêtement de 478 x 720 mm. Aucun de ces trois nombres n'était sourcé :
 * relu le 2026-09-13, le commit d'origine documente les polices, la colorimétrie
 * et le recadrage, et ne dit rien du placement. Denis a trouvé le dos haut ;
 * mesure faite, il l'était, et le cœur l'était bien davantage — 192 mm sous
 * l'encolure pour une norme métier entre 64 et 114 mm.
 *
 * ⚠️ TOUT SE MESURE DEPUIS L'ENCOLURE, y compris le cœur. L'ancienne version
 * mélangeait deux références — « sous l'encolure » au dos, « sous la couture
 * d'épaule » devant — ce qui rendait les deux cotes incomparables entre elles et
 * incomparables aux guides, qui partent tous du col.
 *
 * Sources, toutes relevées le 2026-09-13 :
 *   - screenprinting.com, guide des placements standard : back yoke 12 x 4 po à
 *     4 po du col ; cœur gauche à 2,5-3 po du col, 3,5-4 po de l'axe.
 *   - freshprintssupply.com : cœur gauche, haut du motif à 3-4 po du col,
 *     3-4 po de l'axe.
 *   - Fiche produit Stanley/Stella Creator 2.0 STTU169 : taille L, largeur de
 *     poitrine 56,5 cm, longueur de corps 75 cm.
 */
export const GARMENT = { widthMm: 565, lengthMm: 750 }   // Creator 2.0, taille L

// Silhouette: body 57->143 = 86 u de large, epaule y=20, bas y=150 avant reprise.
const TEE_RAW = 'M 62 20 L 85 12 Q 100 24 115 12 L 138 20 L 172 42 L 152 72 L 143 62 L 143 150 L 57 150 L 57 62 L 48 72 L 28 42 Z'

// L'espace de dessin reste ISOTROPE : une unité vaut le même nombre de mm en x
// et en y, sinon les visuels posés dessus seraient déformés. C'est donc le
// tracé du vêtement qu'on reprend en hauteur, pas l'échelle.
export const K = GARMENT.widthMm / 86                     // mm par unité
export const mm = (v) => v / K
const SHOULDER = 20
const SQUASH = (GARMENT.lengthMm / K) / (150 - SHOULDER)
export const TEE = TEE_RAW.replace(/(\d+(?:\.\d+)?) (\d+(?:\.\d+)?)/g,
  (_, x, y) => `${x} ${(SHOULDER + (Number(y) - SHOULDER) * SQUASH).toFixed(2)}`)

/**
 * Le bas de l'encolure, point de départ de toutes les cotes.
 *
 * ⚠️ CALCULÉ, PAS LU SUR LE TRACÉ. Le col est une courbe quadratique dont le
 * point de contrôle (y=24 avant reprise) n'est PAS sur la courbe : le creux réel
 * vaut (P0 + 2C + P1) / 4, soit 18 et non 24. L'ancienne planche contournait le
 * calcul en partant de deux repères ronds posés à la main, y=17 au dos et y=16
 * devant, qui ne tombaient ni sur l'encolure ni sur l'épaule.
 */
const yAt = (i) => Number(TEE.split(' ')[i])
export const NECK = (yAt(5) + 2 * yAt(8) + yAt(10)) / 4

/**
 * Les trois cotes de pose, en millimètres sous l'encolure.
 *
 * ⛔ ELLES SORTENT DES GUIDES MÉTIER CITÉS PLUS HAUT, plus de nulle part. Le dos
 * fait 9,8 x 3,6 pouces : ce n'est pas un « full back » mais un « back yoke »,
 * que screenprinting.com pose à 4 pouces du col. Le cœur se pose à 2,5-3 pouces
 * du col et 3,5-4 pouces de l'axe ; on prend le milieu des deux fourchettes.
 */
export const POSE = { dosMm: 102, coeurMm: 90, coeurAxeMm: 95 }

// ⛔ `L 143 …` APPARAÎT DEUX FOIS dans le tracé : l'aisselle, puis le bas. Pris
// au premier, le vêtement se retrouvait coupé à mi-corps par le bord du cadre.
export const HEM = Number(TEE.match(/L 143 ([\d.]+) L 57/)[1])
export const LEG = HEM + 13


/** Où poser chaque visuel, dans l'espace de dessin, à partir de sa cote. */
export function poser(cleDos, cleCoeur) {
  const dos = g(cleDos), coeur = g(cleCoeur)
  const dW = mm(dos.W), dH = mm(dos.H)
  const cW = mm(coeur.W), cH = mm(coeur.H)
  return {
    dos, coeur, dW, dH, cW, cH,
    dTop: NECK + mm(POSE.dosMm),
    // ⚠️ Le cœur se cote à son CENTRE, le dos à son HAUT : c'est ce que font les
    // deux guides, et coter autrement rendrait nos chiffres incomparables aux leurs.
    cTop: NECK + mm(POSE.coeurMm) - cH / 2,
    cCx:  100 + mm(POSE.coeurAxeMm),
  }
}

// ⚠️ RÉSOLU DEPUIS CE MODULE, pas depuis le dossier courant. Le manifeste écrit
// ses chemins en `../`, ce qui ne vaut que si l'on exécute depuis `generate/`.
export const b64 = (f) => readFileSync(new URL(f, import.meta.url)).toString('base64')
export const img = (v, x, y, w, h) =>
  `<image href="data:image/png;base64,${b64(v.base + '.png')}" x="${x}" y="${y}" width="${w}" height="${h}"/>`
