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
  ]
}

module.exports = config;
