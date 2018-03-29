import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products/products.service';
import { ProductCommunicationService } from '../../services/communication/product-communication.service';
import { ProductItem } from '../../models/product-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  resolveFn: Function|null = null;

  public products: Promise<ProductItem[]> = new Promise<ProductItem[]>(resolve => this.resolveFn = resolve);

  constructor(
    public productService: ProductsService,
    private communicationService: ProductCommunicationService
  ) {  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .then(resp => this.resolveFn(resp));
  }

  move(product: ProductItem) {
    this.productService.moveToCart(product);
  }
}
