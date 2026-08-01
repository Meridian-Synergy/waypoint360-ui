import { defineConfig } from 'vitest/config'

// Configuration SÉPARÉE de `vitest.config.ts`, qui pilote les tests de rendu
// Storybook dans un navigateur. Les gardes ci-dessous ne lisent que des fichiers :
// les mêler à la configuration navigateur les rendrait lentes et fragiles pour
// rien.
export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'node',
  },
})
