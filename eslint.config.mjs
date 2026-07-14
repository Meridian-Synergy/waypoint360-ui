// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

/**
 * Standalone flat config for the Vue component library (no Nuxt runtime).
 * Same posture as the app/web gates: correctness only — eslint-plugin-vue layout
 * rules are disabled so a first gate doesn't reformat the codebase (see
 * WAYPOINT360_CLAUDE_BACKLOG.md Q1). `any`/unused-vars at `warn` (ratchet).
 */
const VUE_FORMATTING_OFF = {
  'vue/html-self-closing': 'off',
  'vue/attributes-order': 'off',
  'vue/max-attributes-per-line': 'off',
  'vue/first-attribute-linebreak': 'off',
  'vue/html-closing-bracket-newline': 'off',
  'vue/html-closing-bracket-spacing': 'off',
  'vue/html-indent': 'off',
  'vue/html-quotes': 'off',
  'vue/multiline-html-element-content-newline': 'off',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/mustache-interpolation-spacing': 'off',
  'vue/no-multi-spaces': 'off',
  'vue/no-spaces-around-equal-signs-in-attribute': 'off',
  'vue/html-end-tags': 'off',
  'vue/attribute-hyphenation': 'off',
  'vue/v-on-event-hyphenation': 'off',
  'vue/v-bind-style': 'off',
  'vue/v-on-style': 'off',
  'vue/order-in-components': 'off',
  'vue/this-in-template': 'off',
}

export default createConfigForNuxt({
  features: { stylistic: false, tooling: false },
})
  .append({ ignores: ['dist', 'storybook-static', 'node_modules', '.nuxt'] })
  .append({
    rules: {
      ...VUE_FORMATTING_OFF,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      // Components use a types-only `<script>` block before `<script setup>` (idiomatic
      // for this DS); import/first mis-reads the two blocks as one module.
      'import/first': 'off',
    },
  })
  .append({
    // Declaration shims (`declare module '*.vue'`) and Storybook config legitimately
    // use empty object types / @ts-nocheck.
    files: ['**/*.d.ts', '.storybook/**'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  })
