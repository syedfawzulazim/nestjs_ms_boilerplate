import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import * as path from 'path';
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
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const outputPath = path.resolve(process.cwd(), 'swagger.json');
  writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8' });


  
  await app.listen(process.env.PORT);
  logger.log(`Application listening ports: ${process.env.PORT}`);
}
bootstrap().catch((error) => {
  console.log(error?.message, error?.stack);
});
