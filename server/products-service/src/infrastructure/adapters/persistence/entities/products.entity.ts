import { Products } from '@src/domain/models/products';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  

  @Entity({name: 'products'})
  export class ProductsEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({name: 'title'})
    title: string
    
    @Column({name: 'description'})
    description: string
    
    @Column({name: 'price'})
    price: number

    toModel(): Products {
      return new Products({
        id: Number(this.id),
        title: this.title,
        description: this.description,
        price: this.price
      });
    }
  
}