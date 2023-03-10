import { defineConfig } from 'vite';
import{resolve} from 'path'
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        second: resolve(__dirname, 'src/hotel.html'),
        third: resolve(__dirname, 'src/restaurant.html'),
        next: resolve(__dirname, 'src/apartments.html'),
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
