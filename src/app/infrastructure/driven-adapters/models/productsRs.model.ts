interface ProductResponse {
  id: number;
  price: number;
  name: string;
}

export interface ProductsResponse {
  products: ProductResponse[];
}
