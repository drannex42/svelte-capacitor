import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { getAliases } from 'vite-aliases'

const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  publicDir: './assets/',
  build: {
    outDir: './public/'
  },
  resolve: {
    alias: aliases
  },
  optimizeDeps: { exclude: ["@roxi/routify", "@urql/svelte"] },
})
