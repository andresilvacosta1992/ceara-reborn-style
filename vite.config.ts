import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        globIgnores: ['**/lovable-uploads/**'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /\/lovable-uploads\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'user-uploads-cache',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
              }
            }
          }
        ]
      },
      manifest: {
        name: 'Ceará Perfil',
        short_name: 'Ceará Perfil',
        description: 'Soluções completas em infraestrutura elétrica e eletrocalhas',
        theme_color: '#1d4ed8',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendors
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui';
          }
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'vendor-query';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          // Product pages
          if (id.includes('/pages/products/')) {
            return 'pages-products';
          }
          // Main pages
          if (id.includes('/pages/')) {
            return 'pages-main';
          }
          // Components
          if (id.includes('/components/') && !id.includes('/ui/')) {
            return 'components-main';
          }
          // UI components
          if (id.includes('/components/ui/')) {
            return 'components-ui';
          }
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor-misc';
          }
        }
      }
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  }
}));
