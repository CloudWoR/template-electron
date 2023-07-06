import { defineConfig } from '@doubleshot/builder';

export default defineConfig({
  main: '../dist/gateway/main.js',
  entry: './src/main.ts',
  outDir: '../dist/gateway',
  external: ['../../package.json'],
});
