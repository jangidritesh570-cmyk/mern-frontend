import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://student-management-system-9ypu.onrender.com/api/v1',
        changeOrigin: true,
      }
    }
  }
})
