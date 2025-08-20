import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Configuração básica do Vite sem TypeScript
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    target: 'es2018',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});