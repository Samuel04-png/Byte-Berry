import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync, writeFileSync, existsSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-nojekyll',
      closeBundle() {
        // Ensure .nojekyll is copied to dist
        try {
          if (existsSync('public/.nojekyll')) {
            copyFileSync('public/.nojekyll', 'dist/.nojekyll')
          } else {
            writeFileSync('dist/.nojekyll', '')
          }
        } catch (err) {
          // Fallback: create empty file
          writeFileSync('dist/.nojekyll', '')
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

