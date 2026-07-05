<script setup lang="ts">
export type WpContactChannelType = 'whatsapp' | 'email'

defineProps<{
  type:  WpContactChannelType
  href:  string
  label: string
  value: string
  desc:  string
  cta:   string
}>()
</script>

<template>
  <a
    :href="href"
    :target="type === 'whatsapp' ? '_blank' : undefined"
    :rel="type === 'whatsapp' ? 'noopener noreferrer' : undefined"
    :class="['wp-contact-channel', `wp-contact-channel--${type}`]"
  >
    <div class="wp-contact-channel__icon">
      <!-- WhatsApp -->
      <svg v-if="type === 'whatsapp'" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.78-.24-.39A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.58-.48-.5-.67-.51H7.5c-.17 0-.45.06-.69.3C6.57 8.1 6 8.7 6 9.93c0 1.23.91 2.42 1.04 2.59.13.17 1.8 2.74 4.36 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.07-.1-.27-.17-.57-.32z"/>
      </svg>
      <!-- Email -->
      <svg v-else-if="type === 'email'" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.75"/>
        <path d="M2 8l10 7 10-7" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="wp-contact-channel__body">
      <span class="wp-contact-channel__label">{{ label }}</span>
      <span class="wp-contact-channel__value">{{ value }}</span>
      <span class="wp-contact-channel__desc">{{ desc }}</span>
    </div>

    <span class="wp-contact-channel__cta">{{ cta }} →</span>
  </a>
</template>

<style scoped>
.wp-contact-channel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border: 1px solid var(--wp-color-border);
  border-radius: var(--wp-radius-lg);
  text-decoration: none;
  transition:
    border-color var(--wp-transition-fast),
    box-shadow var(--wp-transition-fast),
    transform var(--wp-transition-fast);
}
.wp-contact-channel:hover {
  transform: translateY(-2px);
  box-shadow: var(--wp-shadow-md);
}

.wp-contact-channel--whatsapp:hover { border-color: #25D366; }
.wp-contact-channel--email:hover    { border-color: var(--wp-color-sky); }

.wp-contact-channel__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--wp-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}
.wp-contact-channel--whatsapp .wp-contact-channel__icon {
  background: rgba(37, 211, 102, 0.1);
  color: #25D366;
}
.wp-contact-channel--email .wp-contact-channel__icon {
  background: rgba(0, 170, 239, 0.1);
  color: var(--wp-color-sky);
}

.wp-contact-channel__body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
}

.wp-contact-channel__label {
  font-family: var(--wp-font-condensed);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--wp-color-muted);
}

.wp-contact-channel__value {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--wp-color-navy);
}

.wp-contact-channel__desc {
  font-size: 0.875rem;
  color: var(--wp-color-muted);
  line-height: 1.5;
}

.wp-contact-channel__cta {
  font-size: 0.8125rem;
  font-weight: 600;
}
.wp-contact-channel--whatsapp .wp-contact-channel__cta { color: #25D366; }
.wp-contact-channel--email    .wp-contact-channel__cta { color: var(--wp-color-sky); }
</style>
