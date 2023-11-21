/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    includeSource: ['src/**/*.{js,ts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      '@': '/src',
      '@features': '/src/features',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@constants': '/src/constants',
      '@services': '/src/services',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@contexts': '/src/contexts',
      '@layouts': '/src/layouts',
    },
  },
  define: { 'process.env': process.env },
});
