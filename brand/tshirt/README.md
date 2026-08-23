# Brand assets — impression textile

Fichiers prêts à imprimer pour du marquage sur t-shirt **noir**, dérivés de la source
unique [`WpLogo`](../../src/components/WpLogo/WpLogo.vue) — mêmes tracés, mêmes couleurs
que le header du site et la sidebar de l'app.

Le wordmark est **converti en courbes** : aucune police n'est embarquée dans les PDF.
Un imprimeur qui n'a pas Barlow obtiendrait sinon un rendu en Arial, sans prévenir.

## Quel fichier envoyer

| Besoin | Fichier |
|---|---|
| **DTG / impression numérique** — vectoriel, taille réelle | `*-rvb.pdf` |
| Prestataire qui exige du CMJN (consigne écrite) | `*-cmjn.pdf` |
| Prestataire qui ne prend que du bitmap | `*.png` (300 dpi, fond transparent) |
| Retouche / redimensionnement | `*.svg` (non destiné à l'imprimeur) |

**Préférer le RVB quand rien ne l'interdit.** Mesuré sur ces fichiers : le pin rendu
depuis le PDF CMJN donne `#0082C4`, contre `#00AAEF` exact depuis le PDF RVB. Le bleu de
marque perd visiblement en luminosité dès la conversion, avant même l'encre.

Les PDF sont **calés exactement sur le motif** : la page fait la taille du visuel, sans
marge. Le nom du fichier porte ses cotes.

| Fichier | Emplacement | Taille |
|---|---|---|
| `dos-280x71.93mm` | dos, centré | 280 × 71,9 mm |
| `dos-url-280x101.79mm` | dos, variante avec `waypoint360.eu` | 280 × 101,8 mm |
| `coeur-horizontal-90x23.12mm` | poitrine gauche | 90 × 23,1 mm |
| `coeur-vertical-38.81x48mm` | poitrine gauche, variante verticale | 38,8 × 48 mm |
| `coeur-pin-34.56x45mm` | poitrine gauche, pin seul | 34,6 × 45 mm |

`planche-placement.png` donne les cotes de pose, `apercu-fond-noir.png` montre les cinq
visuels à la même échelle sur fond noir.

## Couleurs

| | RVB | CMJN | Pantone approchant |
|---|---|---|---|
| Sky (pin, « 360 ») | `#00AAEF` | C100 M29 Y0 K6 | 2995 C |
| Navy (point central) | `#1B2A4A` | C64 M43 Y0 K71 | 2767 C |
| Wordmark « WAYPOINT » | `#FFFFFF` | — | — |

Le CMJN des `*-cmjn.pdf` vient d'une **conversion arithmétique**, pas d'un profil ICC.
`#00AAEF` est un cyan très saturé, hors gamut CMJN : il ressortira plus sombre et plus
terne. Les équivalences Pantone sont indicatives et doivent être validées au bon à tirer —
c'est le seul moment où l'on voit le vrai bleu sur le vrai tissu.

## Contraintes de production

- **Fond transparent, non négociable.** En DTG sur textile foncé, la sous-couche blanche
  épouse la silhouette du visuel ; un fond opaque donnerait un rectangle blanc.
- **DTG demande ≥ 80 % de coton.** Vérifier la composition du textile choisi.
- Plus petit détail : le point navy au centre du pin, **Ø 2,96 mm** sur la variante cœur
  90 mm (Ø 9,2 mm au dos). Au-dessus du seuil de risque en impression numérique ; en
  revanche, en flex découpé il serait inéchenillable.
- Le flex monochrome est à écarter (3 couleurs), la broderie aussi sauf à simplifier le
  pin.

## Recadrage — pourquoi ces fichiers ne reprennent pas le viewBox du composant

Le `viewBox` de `WpLogo` variante horizontale (`0 14 205 56`) est plus large que le
dessin : l'encre occupe 165,4 × 42,5 unités, il reste ~28 unités mortes à droite et ~13
en hauteur. En web c'est sans effet, le logo est calé à gauche. Imprimé **centré** au dos,
ce vide décalerait le motif d'environ 3,8 cm sur 28 cm.

Ces fichiers sont donc recadrés sur la **bounding box d'encre réelle**. La cote annoncée
est celle du motif, pas d'un cadre.

## Régénération

Non construit par la CI. À relancer si la marque change :

```bash
cd generate && npm install && npm run generate
```

Le wordmark est vectorisé à partir des `barlow-{800,700,600}-latin.woff2` de
`waypoint360-web/public/fonts/` (chemin surchargeable par `BARLOW_DIR`), avec le layout
fontkit — kerning GPOS compris — et le `letter-spacing` de `WpLogo.vue`. Les tracés du pin
et les cercles sont convertis en courbes de Bézier : aucun arc elliptique, ce qui garantit
un rendu identique par pdf-lib et par librsvg.
