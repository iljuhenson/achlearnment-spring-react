import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      '/api' : 'http://backend:8080/'
    }
  },
  plugins: [react()],
})
