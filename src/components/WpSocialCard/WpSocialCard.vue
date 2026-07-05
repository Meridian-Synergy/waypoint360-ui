<script setup lang="ts">
import type { SocialNetwork } from '../WpSocialLinks/WpSocialLinks.vue'

defineProps<{
  network: SocialNetwork
  href:    string
  label:   string
  handle:  string
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="wp-social-card"
  >
    <div class="wp-social-card__icon">
      <svg v-if="network === 'instagram'" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" stroke-width="1.75"/>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.75"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
      <svg v-else-if="network === 'linkedin'" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.75"/>
        <path d="M7 10v7M7 7.5v.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M11 10v7" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      </svg>
      <svg v-else-if="network === 'tiktok'" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else-if="network === 'youtube'" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" stroke-width="1.75"/>
        <path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor"/>
      </svg>
      <svg v-else-if="network === 'whatsapp'" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52z"/>
      </svg>
      <svg v-else-if="network === 'twitter'" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17.751 3h3.067l-6.7 7.658L22 21h-6.172l-4.833-6.32L5.464 21H2.395l7.167-8.193L2 3h6.328l4.37 5.715L17.75 3zm-1.076 16.172h1.7L7.404 4.744H5.58l11.095 14.428z" fill="currentColor"/>
      </svg>
      <svg v-else-if="network === 'telegram'" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.944 3.239a1.4 1.4 0 0 0-1.437-.198L2.63 10.16a1.4 1.4 0 0 0 .088 2.605l3.993 1.332 1.742 5.226a1.4 1.4 0 0 0 2.334.498l2.118-2.118 3.99 2.993a1.4 1.4 0 0 0 2.19-.884l2.8-15.4a1.4 1.4 0 0 0-.941-1.173zM10.2 17.4l-1.2-3.6 7.6-6.4-6.4 7.6v2.4l-1.2-1.2 1.2 1.2z" fill="currentColor"/>
      </svg>
      <svg v-else-if="network === 'email'" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.75"/>
        <path d="M2 8l10 7 10-7" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="wp-social-card__info">
      <span class="wp-social-card__label">{{ label }}</span>
      <span class="wp-social-card__handle">{{ handle }}</span>
    </div>
  </a>
</template>

<style scoped>
.wp-social-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px;
  background: var(--wp-color-white);
  border: 1px solid var(--wp-color-border);
  border-radius: var(--wp-radius-lg);
  text-decoration: none;
  transition:
    border-color var(--wp-transition-fast),
    transform var(--wp-transition-fast);
}
.wp-social-card:hover {
  border-color: var(--wp-color-sky);
  transform: translateY(-2px);
}

.wp-social-card__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--wp-radius-md);
  background: rgba(0, 170, 239, 0.08);
  color: var(--wp-color-navy);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background var(--wp-transition-fast), color var(--wp-transition-fast);
}
.wp-social-card:hover .wp-social-card__icon {
  background: rgba(0, 170, 239, 0.14);
  color: var(--wp-color-sky);
}

.wp-social-card__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wp-social-card__label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--wp-color-navy);
}

.wp-social-card__handle {
  font-size: 0.75rem;
  color: var(--wp-color-muted);
}
</style>
