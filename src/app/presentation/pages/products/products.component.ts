import { Component, OnInit } from '@angular/core';
import { ProductUsecaseService } from '../../../application/producto/product-usecase.service';
import { Product } from '../../../domain/producto/product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsUseCase: ProductUsecaseService) {}
  ngOnInit(): void {
    this.productsUseCase
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }
}
