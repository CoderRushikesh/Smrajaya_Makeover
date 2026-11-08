import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Browser calls /api/... on localhost:5173, Vite forwards to Render
      '/api': {
        target: 'https://smrajyamakeover-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        timeout: 120000,       // Render free tier can take ~1-2 min to wake
        proxyTimeout: 120000,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          // Remove Origin so the backend doesn't treat it as a cross-origin call
          proxy.on('proxyReq', (proxyReq) => proxyReq.removeHeader('origin'))
        },
      },
    },
  },
})