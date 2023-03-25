import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  //partea de server
  await app.listen(3000);       //partea de api
}
bootstrap();
