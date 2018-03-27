import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductItemModel } from '../../../models/product-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input() product: ProductItemModel;
  @Output() removeAll: EventEmitter<ProductItemModel> = new EventEmitter();
  @Output() add: EventEmitter<ProductItemModel> = new EventEmitter();
  @Output() remove: EventEmitter<ProductItemModel> = new EventEmitter();

  constructor() { }

  onRemove($event) {
    this.remove.emit(this.product);
  }

  onRemoveAll($event) {
    this.removeAll.emit(this.product);
  }

  onChange($event) {
    this.product.count = $event.target.value;
  }

  onAdd($event) {
    this.add.emit(this.product);
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
      availvbale: true
    };
    return classes;
  }
}
