import { CreateProductsDto } from '@src/domain/dtos/create-products.dto';
import { Products } from '@src/domain/models/products';

export interface IProductsRepository {
  create(createProductsDto : CreateProductsDto) : Promise<Products>;
  find(id: number): Promise<Products>;
}
