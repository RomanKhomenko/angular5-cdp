import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { ProductCommunicationService } from '../communication/product-communication.service';
import { ProductItem } from '../../models/product-item.model';

@Injectable()
export class CartService {
  products: ProductItem[] = [];

  constructor(private productCommunicationService: ProductCommunicationService) {
    this.reset();
    this.subscribtion();
  }

  removeAll() {
    this.reset();
  }

  remove(product: ProductItem) {
    this.products = this.products.filter(item => item.name !== product.name);
  }

  private getByName(productName: string): ProductItem {
    return this.products.find((item) => item.name === productName);
  }

  private subscribtion(): void {
    this.productCommunicationService.channel$.subscribe((product) => {
      const existed = this.getByName(product.name);
      if (existed) {
        existed.clickedCount += product.clickedCount;
      } else {
        this.products.push(product);
      }
    });
  }

  private reset(): void {
    this.products = [];
  }
}
