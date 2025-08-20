import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Skip TypeScript checking during build to avoid config issues
  esbuild: {
    // Remove console logs in production
    drop: ['console', 'debugger'],
    // Skip TypeScript errors
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  build: {
    // Inline small assets for performance
    assetsInlineLimit: 8192, // Inline assets smaller than 8kb
    cssCodeSplit: false, // Bundle all CSS into one file for inlining
    rollupOptions: {
      output: {
        // Optimize chunking for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-slot', '@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          'icons': ['lucide-react', 'react-icons'],
        },
        // Optimize asset names for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Production optimizations
    minify: 'terser',
    sourcemap: false,
    target: 'es2015',
    // Preload module scripts
    modulePreload: {
      polyfill: true,
    },
    // Enable CSS inlining for critical styles
    cssInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@tanstack/react-query',
      'next-themes'
    ],
    // Force dep optimization for better initial loading
    force: true,
  },
});