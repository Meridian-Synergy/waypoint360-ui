<script setup lang="ts">
export type WpContactActionType = 'whatsapp' | 'email'

export interface WpContactAction {
  type:  WpContactActionType
  href:  string
  label: string
}

defineProps<{
  title:   string
  desc:    string
  actions: WpContactAction[]
}>()
</script>

<template>
  <section class="wp-contact-banner">
    <div class="wp-contact-banner__inner">
      <div class="wp-contact-banner__text">
        <h2 class="wp-contact-banner__title">{{ title }}</h2>
        <p class="wp-contact-banner__desc">{{ desc }}</p>
      </div>
      <div class="wp-contact-banner__actions">
        <a
          v-for="action in actions"
          :key="action.type"
          :href="action.href"
          :target="action.type === 'whatsapp' ? '_blank' : undefined"
          :rel="action.type === 'whatsapp' ? 'noopener noreferrer' : undefined"
          :class="['wp-contact-btn', `wp-contact-btn--${action.type}`]"
        >
          <!-- WhatsApp icon -->
          <svg v-if="action.type === 'whatsapp'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.78-.24-.39A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.58-.48-.5-.67-.51H7.5c-.17 0-.45.06-.69.3C6.57 8.1 6 8.7 6 9.93c0 1.23.91 2.42 1.04 2.59.13.17 1.8 2.74 4.36 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.07-.1-.27-.17-.57-.32z"/>
          </svg>
          <!-- Email icon -->
          <svg v-else-if="action.type === 'email'" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.75"/>
            <path d="M2 8l10 7 10-7" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
          </svg>
          {{ action.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wp-contact-banner {
  background: var(--wp-color-navy);
  padding: 64px 0;
}

.wp-contact-banner__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.wp-contact-banner__text {
  flex: 1;
  min-width: 260px;
}

.wp-contact-banner__title {
  font-family: var(--wp-font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--wp-color-white);
  letter-spacing: -0.02em;
  margin: 0 0 10px;
}

.wp-contact-banner__desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
  line-height: 1.6;
}

.wp-contact-banner__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.wp-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: var(--wp-radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity var(--wp-transition-fast), transform var(--wp-transition-fast);
}
.wp-contact-btn:hover { opacity: 0.88; transform: translateY(-1px); }

.wp-contact-btn--whatsapp {
  background: #25D366;
  color: #fff;
}

.wp-contact-btn--email {
  background: rgba(255, 255, 255, 0.1);
  color: var(--wp-color-white);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.wp-contact-btn--email:hover { background: rgba(255, 255, 255, 0.16); }
</style>
