import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Spa-GlowQueen/',
  server: {
    watch: {
      usePolling: true
    }
  }
});
