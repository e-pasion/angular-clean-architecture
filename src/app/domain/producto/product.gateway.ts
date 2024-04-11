import { Observable } from 'rxjs';
import { Product } from './product.entity';

export abstract class ProductGateway {
  abstract getProducts(): Observable<Product[]>;
}
