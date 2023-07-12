<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
    <img width="200" src="https://github.com/Doubleshotjs/doubleshot/raw/main/DoubleShot.png" alt="DoubleShot logo">
</p>

[![Electron Logo](https://electronjs.org/images/electron-logo.svg)](https://electronjs.org)

## Description

[Nest](https://github.com/nestjs/nest) + [Electron](https://www.electronjs.org/zh/)  + [DoubleShot](https://github.com/Doubleshotjs/doubleshot)  + [Vite](https://cn.vitejs.dev/) TypeScript starter repository.

使用DoubleShot将前后端项目捆绑在一起进行开发，同时vite项目、nestjs微服务项目还可以独立编译及运行。

## Installation

```bash
$ git clone https://github.com/CloudWoR/template-electron-nestjs.git
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm dev

# builder
$ pnpm build
```

## 踩坑经历
### 路径错误
```json
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
```
需要使用nestjs功能时，需要将app.asar解压，即**electron-builder.config.js**中需要将asar设置为：false。

### nestjs项目打包问题
直接打包时，并没有将express库全部打包，需要重新安装express，并执行pnpm install命令后再次打包。


## 自动处理静态文件


## License

Nest is [MIT licensed](LICENSE).
