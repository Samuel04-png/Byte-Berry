import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-nojekyll',
      closeBundle() {
        // Ensure .nojekyll is copied to dist
        try {
          copyFileSync('public/.nojekyll', 'dist/.nojekyll')
        } catch (err) {
          // File might not exist, create it
          const fs = require('fs')
          fs.writeFileSync('dist/.nojekyll', '')
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  build: {
    rollupOptions: {
      output: {
        // Ensure proper file extensions
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})

