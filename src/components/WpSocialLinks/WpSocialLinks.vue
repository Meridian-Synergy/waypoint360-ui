<script setup lang="ts">
export type SocialNetwork = 'instagram' | 'linkedin' | 'tiktok' | 'youtube' | 'whatsapp' | 'email' | 'twitter' | 'telegram'

export interface SocialLinkItem {
  network: SocialNetwork
  href: string
  label?: string
}

withDefaults(defineProps<{
  links:    SocialLinkItem[]
  variant?: 'dark' | 'light'
  size?:    'sm' | 'md'
}>(), {
  variant: 'dark',
  size:    'md',
})
</script>

<template>
  <div
    :class="['wp-social-links', `wp-social-links--${variant}`, `wp-social-links--${size}`]"
    role="navigation"
    aria-label="Réseaux sociaux"
  >
    <a
      v-for="item in links"
      :key="item.network"
      :href="item.href"
      :aria-label="item.label ?? item.network"
      class="wp-social-link"
      :target="item.network !== 'email' ? '_blank' : undefined"
      :rel="item.network !== 'email' ? 'noopener noreferrer' : undefined"
    >
      <!-- Instagram -->
      <svg v-if="item.network === 'instagram'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" stroke-width="1.75"/>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.75"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>

      <!-- LinkedIn -->
      <svg v-else-if="item.network === 'linkedin'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.75"/>
        <path d="M7 10v7M7 7.5v.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        <path d="M11 10v7" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      </svg>

      <!-- TikTok -->
      <svg v-else-if="item.network === 'tiktok'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <!-- YouTube -->
      <svg v-else-if="item.network === 'youtube'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" stroke-width="1.75"/>
        <path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor"/>
      </svg>

      <!-- WhatsApp -->
      <svg v-else-if="item.network === 'whatsapp'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.78-.24-.39A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.58-.48-.5-.67-.51H7.5c-.17 0-.45.06-.69.3C6.57 8.1 6 8.7 6 9.93c0 1.23.91 2.42 1.04 2.59.13.17 1.8 2.74 4.36 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.07-.1-.27-.17-.57-.32z" fill="currentColor"/>
      </svg>

      <!-- Twitter / X -->
      <svg v-else-if="item.network === 'twitter'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17.751 3h3.067l-6.7 7.658L22 21h-6.172l-4.833-6.32L5.464 21H2.395l7.167-8.193L2 3h6.328l4.37 5.715L17.75 3zm-1.076 16.172h1.7L7.404 4.744H5.58l11.095 14.428z" fill="currentColor"/>
      </svg>

      <!-- Telegram -->
      <svg v-else-if="item.network === 'telegram'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.944 3.239a1.4 1.4 0 0 0-1.437-.198L2.63 10.16a1.4 1.4 0 0 0 .088 2.605l3.993 1.332 1.742 5.226a1.4 1.4 0 0 0 2.334.498l2.118-2.118 3.99 2.993a1.4 1.4 0 0 0 2.19-.884l2.8-15.4a1.4 1.4 0 0 0-.941-1.173zM10.2 17.4l-1.2-3.6 7.6-6.4-6.4 7.6v2.4l-1.2-1.2 1.2 1.2z" fill="currentColor"/>
      </svg>

      <!-- Email -->
      <svg v-else-if="item.network === 'email'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.75"/>
        <path d="M2 8l10 7 10-7" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</template>

<style scoped>
.wp-social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.wp-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--wp-radius-md);
  border: 1px solid;
  text-decoration: none;
  flex-shrink: 0;
  transition:
    color var(--wp-transition-fast),
    border-color var(--wp-transition-fast),
    background-color var(--wp-transition-fast);
}

.wp-social-link svg {
  display: block;
}

/* Sizes */
.wp-social-links--sm .wp-social-link { width: 32px; height: 32px; }
.wp-social-links--sm .wp-social-link svg { width: 15px; height: 15px; }
.wp-social-links--md .wp-social-link { width: 36px; height: 36px; }
.wp-social-links--md .wp-social-link svg { width: 18px; height: 18px; }

/* Dark variant — for use on navy/dark backgrounds */
.wp-social-links--dark .wp-social-link {
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.5);
}
.wp-social-links--dark .wp-social-link:hover {
  color: var(--wp-color-white);
  border-color: rgba(255, 255, 255, 0.35);
  background-color: rgba(255, 255, 255, 0.06);
}

/* Light variant — for use on white/light backgrounds */
.wp-social-links--light .wp-social-link {
  border-color: var(--wp-color-border);
  color: var(--wp-color-muted);
}
.wp-social-links--light .wp-social-link:hover {
  color: var(--wp-color-navy);
  border-color: var(--wp-color-navy);
  background-color: var(--wp-color-bg);
}
</style>
