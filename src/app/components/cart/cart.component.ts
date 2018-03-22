import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Product } from '../x-shared/models/product.model';
import { ProductCommunicationService } from '../x-shared/services/communication/product-communication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('cartProducts') products: Array<Product>;
  @Output() removeComplete: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  fromProductChild(product: Product) {
    this.removeComplete.emit(product);
  }

  getTotalPrice() {
    let total = 0;
    this.products.forEach(product => total += product.price);
    return total;
  }
}
