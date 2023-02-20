import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('boostrap');
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api/products/v1');

  const config = new DocumentBuilder()
    .setTitle('Products-Service')
    .setDescription('API to handle everything related to products')
    .setVersion('1.0')
    .addTag('Products')
    .addBasicAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  await app.listen(3000);
}
bootstrap();
