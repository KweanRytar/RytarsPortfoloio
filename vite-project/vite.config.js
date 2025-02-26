import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    index: '../vite-project/index.html'
  },
  plugins: [react()],
  base: '/RytarsPortfoloio/',
})
