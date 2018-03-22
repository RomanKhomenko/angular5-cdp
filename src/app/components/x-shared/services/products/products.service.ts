import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductCategory } from '../../models/product-category.model';

@Injectable()
export class ProductsService {
  private products: Array<Product> = [
    new Product('Clothing1', 'Clothing1 description', 100, 2, ProductCategory.Clothing),
    new Product('Clothing2', 'Clothing2 description', 200, 3, ProductCategory.Clothing),
    new Product('Electronic1', 'Electronic1 description', 4, 300, ProductCategory.Electronic),
    new Product('Sports1', 'Sports1 description', 400, 5, ProductCategory.Sports),
    new Product('Electronic2', 'Electronic2 description', 6, 500, ProductCategory.Electronic)
  ];

  constructor() { }

  getAll(): Array<Product> {
    return this.products;
  }

  getAvailable() {
    return this.products.filter(product => product.isAvailable);
  }
}
