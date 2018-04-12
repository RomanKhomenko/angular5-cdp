import { Injectable, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { ProductItem } from '../../models/product-item.model';

@Injectable()
export class CartService implements OnInit {
  products: ProductItem[] = [];

  ngOnInit(): void {
    this.reset();
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

  addToCart(product: ProductItem) {
    const existed = this.getByName(product.name);
    if (existed) {
      existed.clickedCount += product.clickedCount;
    } else {
      this.products.push(product);
    }
  }

  private reset(): void {
    this.products = [];
  }
}
