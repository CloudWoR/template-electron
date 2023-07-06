import { defineConfig } from '@doubleshot/builder';

export default defineConfig({
  main: '../dist/electron/main.js',
  entry: './src/main.ts',
  outDir: '../dist/electron',
  external: ['electron', '../../package.json'],
  electron: {
    preload: {
      entry: '../preload/preload.d.ts',
    },
    rendererUrl: 'http://localhost:5173',
    waitTimeout: 5000,
  },
});
