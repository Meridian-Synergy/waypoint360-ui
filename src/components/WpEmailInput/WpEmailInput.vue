<script setup lang="ts">
import { ref, watch } from 'vue'
import WpInput from '../WpInput/WpInput.vue'
import { isEmailShaped, normaliseEmail } from '../../utils/email'

/**
 * Un champ e-mail qui vérifie au bon moment.
 *
 * ⚠️ `type="email"` NE SUFFIT PAS, et c'est le piège de ce champ. Le navigateur
 * ne valide un `type="email"` qu'à la SOUMISSION NATIVE d'un formulaire. Dans
 * une application où l'on enregistre par un bouton `@click`, sans `<form>`,
 * cette validation ne se déclenche jamais — le champ a l'air contraint, il ne
 * l'est pas. Constaté le 2026-08-20 : les champs e-mail portaient tous
 * `type="email"` et acceptaient n'importe quoi.
 *
 * LA VÉRIFICATION SE FAIT AU FLOU, jamais à la frappe. « jean@ » n'est pas
 * encore une adresse, et le dire au troisième caractère n'aide personne — c'est
 * le défaut le plus courant de ces composants.
 *
 * Ne porte aucun texte : ce paquet n'a pas d'internationalisation, le
 * consommateur passe le message traduit.
 */
const props = withDefaults(defineProps<{
  modelValue?: string | null
  label?: string
  placeholder?: string
  hint?: string
  disabled?: boolean
  /** Affiché quand l'adresse ne ressemble pas à une adresse. Déjà traduit. */
  invalidMessage?: string
}>(), {
  modelValue: null,
  disabled: false,
  invalidMessage: 'This address does not look valid.',
})

const emit = defineEmits<{ 'update:modelValue': [value: string | null] }>()
defineOptions({ inheritAttrs: false })

const raw = ref(props.modelValue ?? '')
const invalid = ref(false)

// La valeur peut changer de l'extérieur — une fiche qui charge, un formulaire
// réinitialisé. On ne réécrit jamais pendant que la personne tape.
watch(() => props.modelValue, v => {
  if (normaliseEmail(raw.value) === v) return
  raw.value = v ?? ''
  invalid.value = false
})

function onInput(v: string) {
  raw.value = v
  // La correction efface l'erreur immédiatement : laisser le message pendant
  // qu'on corrige donne l'impression de ne pas être écouté.
  if (invalid.value && isEmailShaped(v)) invalid.value = false
  emit('update:modelValue', normaliseEmail(v))
}

function onBlur() {
  const v = raw.value.trim()
  // Un champ vidé n'est pas un champ invalide : beaucoup d'adresses sont
  // facultatives, et crier sur un champ qu'on vient d'effacer est absurde.
  invalid.value = v.length > 0 && !isEmailShaped(v)
  if (!invalid.value) raw.value = normaliseEmail(v) ?? ''
}
</script>

<template>
  <WpInput
    :model-value="raw"
    type="email"
    inputmode="email"
    autocomplete="email"
    :label="label"
    :hint="hint"
    :disabled="disabled"
    :placeholder="placeholder || 'nom@exemple.fr'"
    :error="invalid ? invalidMessage : undefined"
    v-bind="$attrs"
    @update:model-value="onInput"
    @blur="onBlur"
  />
</template>
