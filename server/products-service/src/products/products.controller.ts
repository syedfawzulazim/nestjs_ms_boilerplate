import { Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Post()
    create(): string {
        return 'products created'
    }
    @Get()
    getAll(): string {
        return 'All products'
    }

}
