import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: "src",
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
    ],
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
      },
    },
  },
})