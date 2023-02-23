import {IsNotEmpty, IsString, IsNumber,} from 'class-validator';

export class ProductsDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

}