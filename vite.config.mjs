// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zakarie-portfolio/', // GitHub Pages subpath; beddel '/' marka aad u wareegto zakariehassan.me
})
