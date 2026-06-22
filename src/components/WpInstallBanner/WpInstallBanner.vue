<script setup lang="ts">
// Presentational "add to home screen" banner. All install logic (capturing
// beforeinstallprompt, iOS detection, dismissal persistence) lives in the
// consumer — this component only renders the card and emits intent.
withDefaults(defineProps<{
  title?:        string
  description?:  string
  installLabel?: string
  dismissLabel?: string
  iconSrc?:      string
  /** Hide the install button (e.g. iOS Safari, where install is manual). */
  showInstall?:  boolean
  /** Dark surface — for the community app; light is the default (vitrine). */
  dark?:         boolean
}>(), {
  title:        '',
  description:  '',
  installLabel: 'Install',
  dismissLabel: 'Later',
  iconSrc:      '',
  showInstall:  true,
  dark:         false,
})

const emit = defineEmits<{ install: []; dismiss: [] }>()
</script>

<template>
  <section :class="['wp-install', { 'wp-install--dark': dark }]" role="dialog" :aria-label="title">
    <img
      v-if="iconSrc"
      class="wp-install__icon"
      :src="iconSrc"
      alt=""
      aria-hidden="true"
      width="48"
      height="48"
    >
    <div class="wp-install__body">
      <p class="wp-install__title">{{ title }}</p>
      <p v-if="description" class="wp-install__desc">{{ description }}</p>
    </div>
    <div class="wp-install__actions">
      <button class="wp-install__btn wp-install__btn--dismiss" type="button" @click="emit('dismiss')">
        {{ dismissLabel }}
      </button>
      <button
        v-if="showInstall"
        class="wp-install__btn wp-install__btn--install"
        type="button"
        @click="emit('install')"
      >
        {{ installLabel }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.wp-install {
  position:      fixed;
  left:          50%;
  bottom:        var(--wp-space-md, 16px);
  transform:     translateX(-50%);
  z-index:       9998; /* just below modal dialogs (e.g. cookie consent at 9999) */
  width:         calc(100% - 32px);
  max-width:     520px;
  display:       flex;
  align-items:   center;
  gap:           var(--wp-space-md, 16px);
  padding:       var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  background:    var(--wp-color-white, #FFFFFF);
  border:        1px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius-lg, 16px);
  box-shadow:    var(--wp-shadow-lg, 0 8px 40px rgba(27, 43, 86, 0.14));
  font-family:   var(--wp-font-body, 'Barlow', sans-serif);
  animation:     wp-install-up 0.3s ease;
}
@keyframes wp-install-up {
  from { opacity: 0; transform: translateX(-50%) translateY(140%); }
  to   { opacity: 1; transform: translateX(-50%); }
}

.wp-install__icon {
  flex-shrink:   0;
  width:         48px;
  height:        48px;
  border-radius: var(--wp-radius-md, 8px);
}

.wp-install__body { flex: 1; min-width: 0; }

.wp-install__title {
  font-family:    var(--wp-font-display, 'Barlow', sans-serif);
  font-size:      0.95rem;
  font-weight:    700;
  color:          var(--wp-color-navy, #1B2B56);
  letter-spacing: -0.01em;
  margin:         0;
}

.wp-install__desc {
  font-size:   0.8rem;
  color:       var(--wp-color-muted-strong, #636B82);
  line-height: 1.45;
  margin:      2px 0 0;
}

.wp-install__actions {
  display:       flex;
  flex-direction: column;
  gap:           var(--wp-space-xs, 4px);
  flex-shrink:   0;
}

.wp-install__btn {
  display:         inline-flex;
  align-items:     center;
  justify-content: center;
  padding:         var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  border-radius:   var(--wp-radius-md, 8px);
  font-family:     var(--wp-font-body, 'Barlow', sans-serif);
  font-size:       0.8rem;
  font-weight:     600;
  cursor:          pointer;
  white-space:     nowrap;
  border:          none;
  transition:      opacity var(--wp-transition-fast, 0.1s ease), transform var(--wp-transition-fast, 0.1s ease);
}
.wp-install__btn:hover { opacity: 0.85; transform: translateY(-1px); }

.wp-install__btn--install {
  background: var(--wp-color-sky, #00AAEF);
  color:      var(--wp-color-white, #FFFFFF);
}

.wp-install__btn--dismiss {
  background: transparent;
  color:      var(--wp-color-muted-strong, #636B82);
  padding:    var(--wp-space-sm, 8px) var(--wp-space-sm, 8px);
}
.wp-install__btn--dismiss:hover { color: var(--wp-color-navy, #1B2B56); }

/* Dark surface — community app */
.wp-install--dark {
  background:   var(--wp-color-dark-bg, #10192C);
  border-color: rgba(255, 255, 255, 0.08);
}
.wp-install--dark .wp-install__title  { color: var(--wp-color-white, #FFFFFF); }
.wp-install--dark .wp-install__desc   { color: var(--wp-color-muted, #8C95AA); }
.wp-install--dark .wp-install__btn--dismiss { color: var(--wp-color-muted, #8C95AA); }
.wp-install--dark .wp-install__btn--dismiss:hover { color: var(--wp-color-white, #FFFFFF); }

@media (min-width: 480px) {
  .wp-install__actions { flex-direction: row; align-items: center; }
}
</style>
