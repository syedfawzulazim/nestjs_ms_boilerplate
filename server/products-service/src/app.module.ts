import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmConfig} from './shared/config/typeorm.config';
@Module({
  imports: [ProductsModule, TypeOrmModule.forRoot(typeOrmConfig),],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
