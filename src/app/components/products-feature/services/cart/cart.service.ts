import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { ProductsHttpService } from '../../../core/services/products/products-http.service';
import { ProductStatus, Product } from '../../../core/models';
import { ProductItemModel } from '../../models/product-item.model';
import { ProductCommunicationService } from '../communication/product-communication.service';

@Injectable()
export class CartService {
  constructor(
    private productsHttpService: ProductsHttpService,
    private productCommunicationService: ProductCommunicationService
  ) { }

  getProducts() {
    const items = this.productsHttpService.getAll();
    const inCartItems = items.filter(item => item.status === ProductStatus.InCart);
    const grouped = this.groupBy(inCartItems, item => item.name);

    grouped.map(item => {
      item.totalAmount = items.filter(i => i.name === item.name).length;
    });
    return grouped;
  }

  moveToStok(product: ProductItemModel) {
 /*    const productDto = this.productsHttpService.getByName(productName, (prd) => prd.status === ProductStatus.InCart);
    productDto.status = ProductStatus.InStock;

    if (productDto) {
      this.productsHttpService.updateProduct(productDto);
      this.productCommunicationService.notify();
    } */
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
