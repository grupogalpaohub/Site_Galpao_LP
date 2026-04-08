import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  // Uncomment and change this to your repo name if deploying to GitHub Pages
  // base: '/your-repo-name/',
  build: {
    outDir: 'dist',
  }
})