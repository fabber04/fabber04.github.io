import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: https://fabber04.github.io/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
