import { Injectable } from '@angular/core';

import { ProductsHttpService } from '../../../core/services/index';
import { Product } from '../../../core/models';
import { ProductItem } from '../../models/product-item.model';
import { CartService } from '../cart/cart.service';

@Injectable()
export class ProductsService {
  constructor(
    private productsHttpService: ProductsHttpService,
    private cartService: CartService
  ) { }

  getProducts(): Promise<ProductItem[]> {
    return this.productsHttpService.get()
      .then(response => response.map(this.mapTo))
      .catch(response => Promise.resolve(Product[0]));
  }

  getById(id: number): Promise<ProductItem> {
    return this.productsHttpService.getById(id)
      .then(response => this.mapTo(response))
      .catch(response => Promise.resolve<ProductItem>(null));
  }

  getComments(id: number): Promise<string[]> {
    return this.productsHttpService.getById(id)
      .then(response => response.comments)
      .catch(response => Promise.resolve<string[]>([]));
  }

  moveToCart(product: ProductItem) {
    this.cartService.addToCart({...product});
  }

  private mapTo(productDto: Product): ProductItem {
    return new ProductItem(
      +productDto.id,
      productDto.name,
      productDto.description,
      productDto.price,
      productDto.count
    );
  }
}
