import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Para rutas relativas
  server: {
    watch: {
      usePolling: true // Útil para entornos como WSL o Docker
    }
  }
});