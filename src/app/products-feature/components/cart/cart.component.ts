import { Component, Input, EventEmitter, Output, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { ProductCommunicationService } from '../../services/communication/product-communication.service';
import { CartService } from '../../services/cart/cart.service';
import { ProductItem } from '../../models/product-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  @ViewChildren('cartItem')
  cartItems: QueryList<CartComponent>;

  products: ProductItem[] = [];

  constructor(public cartService: CartService) { }

  fromProductChild(product: ProductItem) {
    this.cartService.remove(product);
  }

  removeAll() {
    this.cartService.removeAll();
  }

  getTotalPrice() {
/*     let total = 0;
    this.cartItems.forEach(item => total += item.getTotalPrice()); */
    let total = 0;
    this.cartService.products.forEach(product => total += product.price * product.clickedCount);
    return total;
  }
}
