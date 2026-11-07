import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base matchar GitHub Pages-repot: https://anifinnab.github.io/vvstech/
export default defineConfig({
  base: '/vvstech/',
  plugins: [react(), tailwindcss()],
})
