import { Injectable } from '@angular/core';

import { Product, ProductModel, ProductCategory, ProductStatus } from '../../models/index';

@Injectable()
export class ProductsHttpService {
  private products: Array<Product> = [
    new ProductModel('Clothing1', 'Clothing1 description', 100, ProductCategory.Clothing, ProductStatus.InStock),
    new ProductModel('Clothing1', 'Clothing1 description', 100, ProductCategory.Clothing, ProductStatus.InStock),
    new ProductModel('Clothing1', 'Clothing1 description', 100, ProductCategory.Clothing, ProductStatus.InStock),
    new ProductModel('Clothing1', 'Clothing1 description', 100, ProductCategory.Clothing, ProductStatus.InStock),
    new ProductModel('Clothing2', 'Clothing2 description', 200, ProductCategory.Clothing, ProductStatus.InStock),
    new ProductModel('Clothing2', 'Clothing2 description', 200, ProductCategory.Clothing, ProductStatus.InStock),
    new ProductModel('Electronic1', 'Electronic1 description', 40, ProductCategory.Electronic, ProductStatus.InStock),
    new ProductModel('Sports1', 'Sports1 description', 400, ProductCategory.Sports, ProductStatus.InStock),
    new ProductModel('Electronic2', 'Electronic2 description', 6, ProductCategory.Electronic, ProductStatus.InStock)
  ];

  getAll(): Array<Product> {
    return this.products;
  }

  getByName (name: string, filter: (value: Product) => boolean) {
    return this
      .firstOrDefault<Product>(this.products, (prd, index) => prd.name === name && filter(prd));
  }

  updateProduct(product: Product) {
    this.products.map(prd => prd.id === product.id ? prd === product : null);
  }

  private firstOrDefault<T>(array: Array<T>, fn: (value: T, index: number) => boolean) {
    return array.find(fn) || null;
  }
}
