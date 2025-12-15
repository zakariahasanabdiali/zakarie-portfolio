// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Custom domain deployed at root; update to '/zakarie-portfolio/' only if you revert to repo subpath hosting.
  base: '/',
})
