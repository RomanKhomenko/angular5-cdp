import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductItem } from '../../../models/product-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input() product: ProductItem;
  @Output() remove: EventEmitter<ProductItem> = new EventEmitter();

  constructor() { }

  onRemove($event) {
    this.remove.emit(this.product);
  }

  setStyles() {
    const styles = {
      // CSS property names
      'font-style':  'italic',
    };
    return styles;
  }

  setClasses() {
    const classes =  {
      table: true
    };
    return classes;
  }

  getTotal() {
    return this.product.clickedCount * this.product.price;
  }
}
