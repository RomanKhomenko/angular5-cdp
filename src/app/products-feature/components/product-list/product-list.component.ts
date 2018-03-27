import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products/products.service';
import { ProductItemModel } from '../../models/product-item.model';
import { ProductCommunicationService } from '../../services/communication/product-communication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Array<ProductItemModel>;

  constructor(
    private productService: ProductsService,
    private communicationService: ProductCommunicationService
  ) { }

  ngOnInit(): void {
    this.loadProducts();

    this.communicationService.channel$.subscribe(
      data => this.loadProducts()
    );
  }

  loadProducts() {
    this.products = this.productService.getProducts();
  }

  move(product: ProductItemModel) {
    this.productService.moveToCart(product.name);
  }
}
