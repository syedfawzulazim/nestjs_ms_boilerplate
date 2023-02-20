import { ProductsService } from 'src/products/products.service'
import { ProductsController } from 'src/products/products.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [ProductsController],
    providers:[ProductsService]
})
export class ProductsModule {}
