import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@features': '/src/features',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@constants': '/src/constants',
      '@services': '/src/services',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
    },
  },
  define: { 'process.env': process.env },
});
