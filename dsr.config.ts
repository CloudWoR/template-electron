import { defineConfig } from '@doubleshot/runner';

export default defineConfig({
  run: [
    {
      cwd: 'packages/renderer',
      name: 'renderer',
      prefixColor: 'cyan',
      commands: {
        dev: 'pnpm dev',
        build: 'pnpm build',
      }
    },
    {
      cwd: 'packages/gateway',
      name: 'gateway',
      prefixColor: 'pink',
      commands: {
        dev: 'dsb build',
        build: 'dsb build',
      }
    },
    {
      cwd: 'packages/electron',
      name: 'electron',
      prefixColor: 'blue',
      commands: {
        dev: {
          command: 'npx rimraf dist && npx dsb dev -t electron',
          killOthersWhenExit: true,
        },
        build: 'dsb build -t electron',
      }
    }
  ],
  electronBuild: {
    projectDir: './',
    commandName: 'build',
    config: 'electron-builder.config.js',
  }
});
