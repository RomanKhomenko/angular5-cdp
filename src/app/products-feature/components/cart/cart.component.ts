import { Component, Input, EventEmitter, Output, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { ProductItem } from '../../models/product-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  productMap: any = {
    'name': 'Product name',
    'price': 'Product price',
    'clickedCount': 'Quantity'
  };
  orderMap = {
    key: 'name',
    direction: true
  };

  @ViewChildren('cartItem')
  cartItems: QueryList<CartComponent>;

  constructor(public cartService: CartService) {  }

  fromProductChild(product: ProductItem) {
    this.cartService.remove(product);
  }

  removeAll() {
    this.cartService.removeAll();
  }

  getKeys() {
    return Object.keys(this.productMap);
  }

  setOrdering(event) {
    const key = event.srcElement.value;

    if (this.orderMap.key === key) {
      this.orderMap.direction = !this.orderMap.direction;
    } else {
      this.orderMap.key = key;
      this.orderMap.direction = true;
    }
  }

  getTotalPrice() {
/*     let total = 0;
    this.cartItems.forEach(item => total += item.getTotalPrice()); */
    let total = 0;
    this.cartService.products.forEach(product => total += product.price * product.clickedCount);
    return total;
  }
}
