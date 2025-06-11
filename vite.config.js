import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        main_page: 'src/pages/main.html',
        herb_detail: 'src/pages/herb-detail.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: 'assets'
});
