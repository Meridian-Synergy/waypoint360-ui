<script setup lang="ts">
// Container for a CRUD++ "Actions" section: a titled card that stacks WpActionCard rows.
// Pairs with WpActionCard so the whole pattern lives in one place.

withDefaults(defineProps<{ title?: string }>(), { title: '' })
</script>

<template>
  <section class="wp-action-section">
    <h2 v-if="title || $slots.title" class="wp-action-section__title">
      <slot name="title">{{ title }}</slot>
    </h2>
    <div class="wp-action-section__list">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.wp-action-section {
  background: var(--wp-color-surface, #fff);
  border: 1px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius, 10px);
  padding: 20px;
}
.wp-action-section__title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--wp-color-text, #0F1B33);
  margin: 0 0 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--wp-color-border, #D5D9E4);
}
.wp-action-section__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
