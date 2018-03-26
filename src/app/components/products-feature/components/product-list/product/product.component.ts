import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductItemModel } from '../../../models/product-item.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product: ProductItemModel;
  @Output() buy: EventEmitter<ProductItemModel> = new EventEmitter();

  constructor() { }

  onBuy($event) {
    console.log(`Click ${this.product.name}`);
    this.buy.emit(this.product);
  }
}
