import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@vercel/analytics/react', '@vercel/speed-insights/react'],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'icons',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              priority: 30,
            },
            {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
          ],
        },
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})

