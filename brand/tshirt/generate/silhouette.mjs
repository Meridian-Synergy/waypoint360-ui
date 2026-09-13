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
// Les points hauts d'epaule sont (85,12) et (115,12).
const RAW = { hps: 12, shoulder: 20, hem: 150, halfWidthU: 86 }

// L'espace de dessin reste ISOTROPE : une unité vaut le même nombre de mm en x
// et en y, sinon les visuels posés dessus seraient déformés. C'est donc le
// tracé du vêtement qu'on reprend en hauteur, pas l'échelle.
export const K = GARMENT.widthMm / RAW.halfWidthU          // mm par unité
export const mm = (v) => v / K
const SQUASH = (GARMENT.lengthMm / K) / (RAW.hem - RAW.shoulder)
const yy = (y) => +(RAW.shoulder + (y - RAW.shoulder) * SQUASH).toFixed(2)

/** Le point haut d'épaule, d'où se cote le cœur. */
export const HPS = yy(RAW.hps)

/**
 * ⛔ LE DEVANT ET LE DOS N'ONT PAS LA MÊME ENCOLURE, et l'ancien tracé servait
 * la même des deux côtés. Un col rond descend d'environ 2 cm derrière et 7 cm
 * devant : dessiner le col du dos sur le devant faisait paraître le logo de
 * poitrine collé au col, ce que Denis a vu le 2026-09-13.
 *
 * ⚠️ CES DEUX PROFONDEURS NE SONT PAS SOURCÉES. La fiche produit Creator 2.0 ne
 * donne que trois cotes — demi-poitrine, longueur, manche — et pas l'encolure.
 * Ce sont des ordres de grandeur de col rond. Elles servent au DESSIN ; la cote
 * du cœur, elle, part du point haut d'épaule, justement parce que les guides
 * disent de ne pas dépendre du col, qui varie d'une marque à l'autre.
 */
const NECK_DROP = { dos: 25, devant: 75 }

const tracer = (dipMm) => {
  // Le creux d'une quadratique vaut (P0 + 2C + P1) / 4 : on inverse pour placer
  // le point de contrôle, qui n'est pas sur la courbe.
  const C = (4 * (HPS + mm(dipMm)) - 2 * HPS) / 2
  return `M 62 ${yy(20)} L 85 ${HPS} Q 100 ${C.toFixed(2)} 115 ${HPS} L 138 ${yy(20)} `
       + `L 172 ${yy(42)} L 152 ${yy(72)} L 143 ${yy(62)} L 143 ${yy(150)} L 57 ${yy(150)} `
       + `L 57 ${yy(62)} L 48 ${yy(72)} L 28 ${yy(42)} Z`
}
export const TEE_DOS = tracer(NECK_DROP.dos)
export const TEE_DEVANT = tracer(NECK_DROP.devant)

/** Le bas de l'encolure arrière, d'où se cote le motif du dos. */
export const NECK = HPS + mm(NECK_DROP.dos)

/**
 * Les trois cotes de pose, arbitrées par Denis le 2026-09-13 sur une planche
 * comparant trois positions pour chacune.
 *
 * ⛔ LE CŒUR SE COTE SOUS LE POINT HAUT D'ÉPAULE, PAS SOUS LE COL. C'est ce que
 * demande arklavo, et il dit pourquoi : « les cols varient en hauteur d'une
 * marque à l'autre, les coutures d'épaule non ». Avoir coté sous le col est
 * l'erreur qui a fait remonter ce logo à 126 mm, hors des deux fourchettes.
 *
 * ⚠️ LES GUIDES DIVERGENT VRAIMENT sur le cœur : arklavo dit 102 mm sous
 * l'épaule, vistaprint et printify 178 à 229 mm. « Left chest » n'est pas défini
 * par une mesure unique. 224 mm est dans la seconde fourchette, et c'est aussi
 * la valeur que portait la planche d'août.
 *
 * ⚠️ L'ÉCART À L'AXE EST DÉRIVÉ, PAS SAISI. « Au centre de la moitié droite »
 * vaut le quart de la largeur : le jour où la taille de référence change, la
 * cote suit au lieu de mentir.
 */
export const POSE = {
  dosMm: 150,                          // sous l'encolure arriere
  coeurMm: 224,                        // centre, sous le point haut d'epaule
  coeurAxeMm: GARMENT.widthMm / 4,     // centre de la moitie droite
}

export const HEM = yy(RAW.hem)
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
    // guides, et coter autrement rendrait nos chiffres incomparables aux leurs.
    cTop: HPS + mm(POSE.coeurMm) - cH / 2,
    cCx:  100 + mm(POSE.coeurAxeMm),
  }
}

// ⚠️ RÉSOLU DEPUIS CE MODULE, pas depuis le dossier courant. Le manifeste écrit
// ses chemins en `../`, ce qui ne vaut que si l'on exécute depuis `generate/`.
export const b64 = (f) => readFileSync(new URL(f, import.meta.url)).toString('base64')
export const img = (v, x, y, w, h) =>
  `<image href="data:image/png;base64,${b64(v.base + '.png')}" x="${x}" y="${y}" width="${w}" height="${h}"/>`
