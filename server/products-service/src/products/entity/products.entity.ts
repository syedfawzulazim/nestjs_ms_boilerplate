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
    id: string

    @Column({name: 'title'})
    title: string
    
    @Column({name: 'description'})
    description: string
    
    @Column({name: 'price'})
    price: number

  }