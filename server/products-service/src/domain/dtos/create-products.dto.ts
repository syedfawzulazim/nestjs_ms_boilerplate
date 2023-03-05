import { Products } from './../models/products';
import {IsNotEmpty, IsString, IsNumber,} from 'class-validator';

export class CreateProductsDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    constructor(props: Products){
        this.id = props.id;
        this.title = props.title;
        this.description = props.description;
        this.price = props.price;
    }
}