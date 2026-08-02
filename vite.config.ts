// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/boda-leoymarian/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          // No auto-inyectar si estamos procesando la carpeta abstracts
          if (filename.includes('abstracts')) {
            return content
          }
          return `
            @use "@/assets/abstracts" as *;
            ${content}
          `
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
