import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': path.resolve('/src')
    }
  }
})
