import { ProductsEntity } from '@src/infrastructure/adapters/persistence/entities/products.entity';
import { IProductsRepository } from '@src/domain/ports/out/products.repository.interface';
import { Injectable, Logger } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { CreateProductsDto } from '@src/domain/dtos';
import { Products } from '@src/domain/models/products';




@Injectable()
export class ProductsOrmRepository implements IProductsRepository {
    constructor(private readonly manager: EntityManager) {}
    async create(createProductsDto: CreateProductsDto): Promise<Products> {
        return 
    }
    async find(id: number): Promise<Products> {
        const productsEntity = new ProductsEntity();

        productsEntity.id = id;
        productsEntity.title= 'adnan';
        productsEntity.description= 'descriptions';
        productsEntity.price = 312;
        

        return productsEntity.toModel();
    }
}