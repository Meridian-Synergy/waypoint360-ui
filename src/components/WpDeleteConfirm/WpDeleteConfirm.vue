<script setup lang="ts">
import WpButton from '../WpButton/WpButton.vue'

/**
 * Le panneau de confirmation d'une suppression, posé EN LIGNE à la place de la
 * rangée qu'il concerne, dans une liste ou un tableau.
 *
 * ⛔ IL REMPLACE TROIS MOTIFS QUI COEXISTAIENT. L'application confirmait une
 * suppression de trois façons : ce panneau, une étiquette rouge sur la rangée
 * qui n'expliquait rien, et le `window.confirm` natif du navigateur — une boîte
 * système au bouton non traduit, impossible à styler, et qui ne dit pas ce que
 * la suppression entraîne. Signalé par Denis le 2026-09-04.
 *
 * ⚠️ `consequence` N'EST PAS FACULTATIF PAR HASARD. C'est la seule chose que la
 * boîte native ne savait pas dire, et c'est ce qui fait la valeur du panneau :
 * « irréversible » d'accord, mais surtout « uniquement possible si la société
 * n'a aucun utilisateur ». Un panneau sans conséquence n'est qu'un bouton de
 * plus.
 */
withDefaults(defineProps<{
  /** « Supprimer Denis Gosset ? » — nommer la cible, jamais « cet élément ». */
  title:        string
  /** Ce que la suppression entraîne, et ce qui peut l'empêcher. */
  consequence:  string
  confirmLabel: string
  cancelLabel:  string
  /** Affiché pendant l'appel : le bouton reste, son libellé change. */
  busyLabel?:   string
  busy?:        boolean
  /** Le refus de l'API, affiché SOUS les boutons plutôt qu'en remplacement. */
  error?:       string
}>(), { busy: false, error: '', busyLabel: '' })

const emit = defineEmits<{ confirm: []; cancel: [] }>()
</script>

<template>
  <div class="wp-delete-confirm" role="group" :aria-label="title">
    <p class="wp-delete-confirm__title">{{ title }}</p>
    <p class="wp-delete-confirm__consequence">{{ consequence }}</p>
    <div class="wp-delete-confirm__actions">
      <WpButton
        variant="danger"
        size="sm"
        :disabled="busy"
        :label="busy && busyLabel ? busyLabel : confirmLabel"
        @click="emit('confirm')"
      />
      <WpButton variant="soft" size="sm" :label="cancelLabel" @click="emit('cancel')" />
    </div>
    <!-- `role="alert"` : un refus arrivé après le clic n'est annoncé à personne
         sans lui, et c'est précisément le moment où l'on regarde ailleurs. -->
    <p v-if="error" class="wp-delete-confirm__error" role="alert">{{ error }}</p>
  </div>
</template>

<style scoped>
.wp-delete-confirm {
  width: 100%;
  padding: var(--wp-space-md, 16px);
  display: flex;
  flex-direction: column;
  gap: var(--wp-space-sm, 8px);
  border-radius: var(--wp-radius-md, 8px);
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  /* ⚠️ `--wp-color-error`, PAS un rouge en dur. C'est le seul jeton de danger du
     système, et il bascule en thème sombre (#dc2626 → #f87171). Un pastel figé
     formerait un carton clair venu d'ailleurs sur la surface navy, exactement le
     défaut que WpAlert a déjà eu.
     `color-mix` avec `transparent` : le fond suit la surface qui le porte au
     lieu d'en imposer une. */
  border: 1px solid var(--wp-color-error, #dc2626);
  background: color-mix(in srgb, var(--wp-color-error, #dc2626) 8%, transparent);
}
.wp-delete-confirm__title {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  /* Le jeton du consommateur d'abord : navy en dur serait navy sur navy en
     thème sombre. Même repli en cascade que WpButton. */
  color: var(--wp-color-text, var(--wp-color-navy, #1B2B56));
}
.wp-delete-confirm__consequence {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--wp-color-text-sub, var(--wp-color-muted-strong, #636B82));
}
.wp-delete-confirm__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp-space-sm, 8px);
}
.wp-delete-confirm__error {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--wp-color-error, #dc2626);
}
</style>
