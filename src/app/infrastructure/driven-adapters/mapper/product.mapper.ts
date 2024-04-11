import { Product } from '../../../domain/producto/product.entity';
import { ProductsResponse } from '../models/productsRs.model';

export const productMapper = (productsRs: ProductsResponse): Product[] => {
  return productsRs.products.map((product) => {
    return {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
    };
  });
};
