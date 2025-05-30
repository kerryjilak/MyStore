import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true, // 🔑 this fixes common proxy issues
      },
    },
  },
  base:process.env.VITE_BASE_PATH || '/MyStore'
})
