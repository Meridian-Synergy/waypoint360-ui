<script setup lang="ts" generic="T extends Record<string, unknown>">
import WpLoadingState from '../WpLoadingState/WpLoadingState.vue'

/**
 * Tableau de données — la forme, une fois, pour tous les écrans.
 *
 * ⚠️ Ce composant existe parce que la forme était écrite à la main partout.
 * Onze tableaux dans l'application, cinq styles distincts, et trois dérives
 * silencieuses en deux jours : une classe qui n'existait pas, cinq copies
 * divergentes, un tableau posé sur le fond de page sans carte. Chaque fois, le
 * typage, le build et les tests étaient verts — un tableau à moitié stylé
 * s'affiche très bien.
 *
 * Un tableau correct porte huit décisions : surface, défilement, en-têtes,
 * cellules, survol, colonnes numériques, état vide, état de chargement. À la
 * main, il suffit d'en oublier une. Un composant ne se moitié-oublie pas.
 *
 * Le design system ne traduit pas : libellés de colonnes et messages d'état
 * sont fournis par l'appelant.
 */

export interface WpColumn {
  /** Clé de la colonne — sert aussi à nommer l'emplacement `#cell-<key>`. */
  key: string
  /** En-tête affiché. Vide pour une colonne d'actions. */
  label?: string
  /** Aligne à droite et fixe les chiffres : une colonne de nombres se compare. */
  numeric?: boolean
  /** Colonne d'actions : alignée à droite, jamais coupée. */
  actions?: boolean
  /** Absorbe la largeur libre — au plus une colonne, sinon aucune ne gagne. */
  grow?: boolean
}

const props = withDefaults(defineProps<{
  columns: WpColumn[]
  rows: T[]
  /** Champ servant de clé de ligne. */
  rowKey?: string
  loading?: boolean
  loadingLabel?: string
  /** Message quand il n'y a rien à montrer — jamais un tableau vide et muet. */
  emptyLabel?: string
  /**
   * Classe posée sur chaque ligne — un état qui teinte la LIGNE entière, comme
   * une fiche retirée de l'annuaire, ne s'exprime pas dans une cellule.
   *
   * ⚠️ Il n'y a volontairement PAS de `@click` de ligne. Une ligne cliquable
   * n'est atteignable qu'à la souris : ni tabulation, ni Entrée, rien d'annoncé
   * par un lecteur d'écran. Le lien va dans une cellule, où il est un vrai lien.
   */
  rowClass?: (row: T, index: number) => string | Record<string, boolean> | undefined
  /**
   * Dessine la carte. À passer à `false` quand le tableau partage déjà une
   * surface avec d'autres éléments : une carte dans une carte se voit.
   */
  surface?: boolean
}>(), {
  rowKey: 'id',
  loading: false,
  loadingLabel: '',
  emptyLabel: '',
  surface: true,
})

function cle(row: T, i: number): string | number {
  const v = row[props.rowKey]
  return typeof v === 'string' || typeof v === 'number' ? v : i
}

function classesCellule(c: WpColumn): Record<string, boolean> {
  return {
    'wp-data-table__num':    !!c.numeric,
    'wp-data-table__actions': !!c.actions,
    'wp-data-table__grow':   !!c.grow,
  }
}
</script>

<template>
  <div :class="['wp-data-table-wrap', { 'wp-data-table-wrap--surface': surface }]">
    <WpLoadingState v-if="loading" :label="loadingLabel" />

    <div v-else-if="!rows.length" class="wp-data-table__empty">
      <!-- Certains écrans ont plus à dire qu'une ligne : « aucun document » et,
           en dessous, où on les fabrique. Un état vide muet renvoie chercher un
           bouton qui n'existe pas. -->
      <slot name="empty">{{ emptyLabel }}</slot>
    </div>

    <!-- Le défilement est celui du TABLEAU, jamais celui de la page : sinon la
         colonne d'actions part hors de l'écran et toute la mise en page suit. -->
    <div v-else class="wp-data-table__scroll">
      <table class="wp-data-table">
        <thead>
          <tr>
            <th v-for="c in columns" :key="c.key" :class="classesCellule(c)" :scope="'col'">
              <slot :name="`header-${c.key}`" :column="c">{{ c.label }}</slot>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in rows" :key="cle(row, i)" :class="rowClass?.(row, i)">
            <td v-for="c in columns" :key="c.key" :class="classesCellule(c)">
              <slot :name="`cell-${c.key}`" :row="row" :column="c" :index="i">
                {{ row[c.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.wp-data-table-wrap--surface {
  background: var(--wp-color-surface, #fff);
  border: 1px solid var(--wp-color-border, #d5dced);
  border-radius: var(--wp-radius, 10px);
  padding: 24px;
  box-shadow: var(--wp-shadow, 0 1px 2px rgba(16, 24, 40, 0.06));
}

.wp-data-table__scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }

.wp-data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}

.wp-data-table th {
  text-align: left;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--wp-color-text-sub, #5b6684);
  padding: 8px 12px;
  border-bottom: 1px solid var(--wp-color-border, #d5dced);
  white-space: nowrap;
}

.wp-data-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--wp-color-border, #d5dced);
  color: var(--wp-color-text, #16203a);
  vertical-align: middle;
}

.wp-data-table tbody tr:hover { background: var(--wp-color-active, #e7f2fb); }
.wp-data-table tbody tr:last-child td { border-bottom: none; }

.wp-data-table__num {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
/* Une colonne d'actions porte presque toujours DEUX boutons. Sans écart, ils
   se touchent — et chaque page reposait sa propre règle pour l'éviter. */
.wp-data-table td.wp-data-table__actions {
  text-align: right;
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}
.wp-data-table th.wp-data-table__actions {
  text-align: right;
  white-space: nowrap;
}
/* Une seule colonne absorbe la largeur : les autres se collent à leur contenu. */
.wp-data-table__grow { width: 100%; }

.wp-data-table__empty {
  color: var(--wp-color-text-sub, #5b6684);
  font-size: 0.875rem;
  margin: 0;
}
</style>
