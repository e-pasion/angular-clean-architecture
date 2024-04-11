import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../domain/producto/product.entity';
import { ProductGateway } from '../../domain/producto/product.gateway';

@Injectable({
  providedIn: 'root',
})
export class ProductUsecaseService {
  constructor(private productsGateway: ProductGateway) {}

  getAllProducts(): Observable<Product[]> {
    return this.productsGateway.getProducts();
  }
}
