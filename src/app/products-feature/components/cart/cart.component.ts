import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ProductItemModel } from '../../models/product-item.model';
import { ProductCommunicationService } from '../../services/communication/product-communication.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  products: Array<ProductItemModel>;

  constructor(
    private cartService: CartService,
    private communicationService: ProductCommunicationService
  ) { }

  ngOnInit(): void {
    this.loadProducts();

    this.communicationService.channel$.subscribe(
      data => this.loadProducts()
    );
  }

  loadProducts() {
    this.products = this.cartService.getProducts();
  }

  fromProductChild(product: ProductItemModel) {
    this.cartService.moveToStok(product);
  }

  getTotalPrice() {
    let total = 0;
    this.products.forEach(product => total += product.price * product.count);
    return total;
  }
}
