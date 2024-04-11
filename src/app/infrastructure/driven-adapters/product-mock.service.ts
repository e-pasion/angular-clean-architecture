import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Product } from '../../domain/producto/product.entity';
import { ProductGateway } from '../../domain/producto/product.gateway';
import { productMapper } from './mapper/product.mapper';
import { PRODUCTS_MOCK } from './mocks/products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductMockService implements ProductGateway {
  constructor() {}
  getProducts(): Observable<Product[]> {
    return of(productMapper(PRODUCTS_MOCK)).pipe(delay(1500));
  }
}
