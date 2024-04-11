import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductUsecaseService } from './application/producto/product-usecase.service';
import { ProductGateway } from './domain/producto/product.gateway';
import { ProductMockService } from './infrastructure/driven-adapters/product-mock.service';
import { ProductsComponent } from './presentation/pages/products/products.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    ProductUsecaseService,
    { provide: ProductGateway, useClass: ProductMockService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
