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
        // Ensure .nojekyll is copied to dist (required for GitHub Pages)
        try {
          if (existsSync('public/.nojekyll')) {
            copyFileSync('public/.nojekyll', 'dist/.nojekyll')
          } else {
            writeFileSync('dist/.nojekyll', '')
          }
          console.log('✓ .nojekyll file created in dist/')
        } catch (err) {
          // Fallback: create empty file
          writeFileSync('dist/.nojekyll', '')
          console.log('✓ .nojekyll file created (fallback)')
        }
        
        // Ensure 404.html is copied to dist for SPA routing on GitHub Pages
        try {
          if (existsSync('public/404.html')) {
            copyFileSync('public/404.html', 'dist/404.html')
            console.log('✓ 404.html file copied to dist/')
          }
        } catch (err) {
          console.warn('⚠ Could not copy 404.html:', err)
        }
        
        // Ensure CNAME is copied to dist for custom domain
        try {
          if (existsSync('CNAME')) {
            copyFileSync('CNAME', 'dist/CNAME')
            console.log('✓ CNAME file copied to dist/')
          }
        } catch (err) {
          console.warn('⚠ Could not copy CNAME:', err)
        }
        
        // Verify favicon files are in dist (they should be auto-copied from public, but let's verify)
        const faviconFiles = ['favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'apple-touch-icon.png', 'site.webmanifest']
        faviconFiles.forEach(file => {
          const publicPath = `public/${file}`
          const distPath = `dist/${file}`
          try {
            if (existsSync(publicPath) && !existsSync(distPath)) {
              copyFileSync(publicPath, distPath)
              console.log(`✓ ${file} copied to dist/`)
            }
          } catch (err) {
            console.warn(`⚠ Could not verify/copy ${file}:`, err)
          }
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // Ensure proper file extensions for GitHub Pages
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          const name = assetInfo.name
          
          // Keep favicon files in root without hashing
          if (/favicon|apple-touch-icon|site\.webmanifest/i.test(name)) {
            return `[name][extname]`
          }
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/[name]-[hash][extname]`
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
    // Ensure assets are properly handled
    assetsInlineLimit: 4096,
  },
  // Server configuration for development
  server: {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
  },
})

