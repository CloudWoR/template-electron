import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import gatewayConfig from '../../configurations/configuration';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const { http } = gatewayConfig();
  await app.listen(http.port);
}
bootstrap();
