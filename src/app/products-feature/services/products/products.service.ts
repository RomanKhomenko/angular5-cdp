import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { ProductsHttpService } from '../../../core/services/index';
import { Product, ProductInterface } from '../../../core/models';
import { ProductCommunicationService } from '../communication/product-communication.service';
import { ProductItem } from '../../models/product-item.model';

@Injectable()
export class ProductsService {
  constructor(
    private productsHttpService: ProductsHttpService,
    private productCommunicationService: ProductCommunicationService
  ) { }

  getProducts(): Promise<ProductItem[]> {
    return new Promise<ProductItem[]>((resolve, reject) => {
      this.productsHttpService.get()
        .then(
          (resp) => resolve(resp.map(this.mapTo)),
          (error) => reject(new ProductItem[0]),
        );
    });
  }

  moveToCart(product: ProductItem) {
    this.productCommunicationService.notify({...product});
  }

  private mapTo(productDto: ProductInterface): ProductItem {
    return new ProductItem(
      productDto.id,
      productDto.name,
      productDto.description,
      productDto.price,
      productDto.count
    );
  }
}
