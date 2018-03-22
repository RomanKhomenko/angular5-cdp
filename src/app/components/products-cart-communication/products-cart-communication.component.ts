import { Component, OnInit } from '@angular/core';

import { Product } from '../x-shared/models/product.model';
import { ProductsService } from '../x-shared/services/products/products.service';

@Component({
  selector: 'app-products-cart-communication',
  templateUrl: './products-cart-communication.component.html',
  styleUrls: ['./products-cart-communication.component.css']
})
export class ProductsCartCommunicationComponent implements OnInit {
  cartProducts: Array<Product> = new Array<Product>();
  availableProducts: Array<Product> = new Array<Product>();

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.initAvailable();
  }

  moveToCart(product: Product) {
    this.availableProducts = this.availableProducts.filter(product1 => product.name !== product1.name);
    this.cartProducts.push(product);
  }

  removeFromCart(product: Product) {
    this.cartProducts = this.cartProducts.filter(product1 => product.name !== product1.name);
    this.availableProducts.push(product);
  }

  initAvailable() {
    this.availableProducts = this.productService.getAvailable();
  }
}
