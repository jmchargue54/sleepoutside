import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts}'],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'no-console': 'warn',
    },
  },
]);
