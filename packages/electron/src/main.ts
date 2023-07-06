import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { app } from 'electron';
import { ElectronIpcTransport } from '@doubleshot/nest-electron';
import { exec } from 'node:child_process';
import {} from 'fs';
import { join } from 'path';
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

async function electronAppInit() {
  const isDev = !app.isPackaged;
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
  if (isDev) {
    if (process.platform === 'win32') {
      process.on('message', (data) => {
        if (data === 'graceful-exit') app.quit();
      });
    } else {
      process.on('SIGTERM', () => app.quit());
    }
  }
  await app.whenReady();
}

async function bootstrap() {
  try {
    await electronAppInit();
    const electronApp =
      await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        strategy: new ElectronIpcTransport(),
      });
    await electronApp.listen();
    // 启动其他子进程（微服务）
    const gatewayPath = join(app.getAppPath(), '../gateway/main.js');
    console.log('app.getDir: ', gatewayPath);
    // exec(`node ${gatewayPath}`, (err, std) => {
    //   console.log('std: ', std);
    //   console.log('err: ', err);
    // });
  } catch (error) {
    app.quit();
  }
}
bootstrap();
