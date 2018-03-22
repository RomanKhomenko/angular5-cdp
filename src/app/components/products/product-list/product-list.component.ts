import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Product } from '../../x-shared/models/product.model';
import { ProductCommunicationService } from '../../x-shared/services/communication/product-communication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('availableProducts') products: Array<Product>;
  @Output() buyComplete: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  fromProductChild(product: Product) {
    this.buyComplete.emit(product);
   }
}
