import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    passWithNoTests: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js'
  },
  plugins: [react()],
})
