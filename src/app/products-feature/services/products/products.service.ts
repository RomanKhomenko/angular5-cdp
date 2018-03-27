import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { ProductsHttpService } from '../../../core/services/products-http/products-http.service';
import { ProductStatus, Product } from '../../../core/models';
import { ProductItemModel } from '../../models/product-item.model';
import { ProductCommunicationService } from '../communication/product-communication.service';

@Injectable()
export class ProductsService {
  constructor(
    private productsHttpService: ProductsHttpService,
    private productCommunicationService: ProductCommunicationService
  ) { }

  getProducts() {
    const items = this.productsHttpService
      .getAll()
      .filter(item => item.status === ProductStatus.InStock);

    return this.groupBy(items, item => item.name);
  }

  moveToCart(productName: string) {
    const productDto = this.productsHttpService.getByName(productName, (prd) => prd.status === ProductStatus.InStock);
    productDto.status = ProductStatus.InCart;

    if (productDto) {
      this.productsHttpService.updateProduct(productDto);
      this.productCommunicationService.notify();
    }
  }

  private groupBy(list: Array<Product>, keyGetter: (product: Product) => any) {
    const map = new Map<string, ProductItemModel>();
    list.forEach((item) => {
        const key = keyGetter(item);
        const productItem = map.get(key);
        if (!productItem) {
            map.set(key, new ProductItemModel(item.name, item.description, item.price, item.category, 1));
        } else {
          productItem.count++;
        }
    });
    return Array.from(map).map(item => item[1]);
  }
}
