const { join } = require('path');
function resolve(path) {
  return join(__dirname, path)
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  productName: 'Doubleshot App',
  directories: {
    output: resolve('dist'),
  },
  asar: false,
  electronDownload: {
    mirror: 'https://npm.taobao.org/mirrors/electron/',
  },
  files: [
    resolve('package.json'),
    {
      from: resolve('packages/dist'),
      to: 'backend',
    },
    {
      from: resolve('packages/renderer/dist'),
      to: 'renderer',
    },
  ],
  extraResources: [
    {
      from: resolve('packages/configurations'),
      to: 'assets/configurations',
      filter: ['**/*.yaml'],
    }
  ]
}

module.exports = config;
