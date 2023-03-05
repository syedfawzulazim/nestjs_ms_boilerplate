import { IViewModel } from './../../../../domain/interfaces/index';
import { Products } from './../../../../domain/models/products';
import { CreateProductsDto } from '@src/domain/dtos/create-products.dto';
import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { GetProductsByIdQuery } from '@src/application/query/get-products-by-id.query';

@Controller('products')
export class ProductsController {
    constructor(private readonly queryBus: QueryBus){}

    @Get(':id')
    @ApiOkResponse({
        type: CreateProductsDto
    })
    async get(@Param('id') id: number): Promise<IViewModel> {
        console.log(id)
        const product = await this.queryBus.execute(
            new GetProductsByIdQuery(id)
          );
        return new CreateProductsDto(product);
    }
}
