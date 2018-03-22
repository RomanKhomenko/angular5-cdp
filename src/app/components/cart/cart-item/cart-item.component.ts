import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../x-shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input() product: Product;
  @Output() remove: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onRemove($event) {
    console.log(`Remove from cart ${this.product.name}`);
    this.remove.emit(this.product);
  }
}
