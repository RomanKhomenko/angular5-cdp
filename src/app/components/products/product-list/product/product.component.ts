import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../x-shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product: Product;
  @Output() buyComplete: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onBuy($event) {
    console.log(`Click ${this.product.name}`);
    this.buyComplete.emit(this.product);
  }
}
