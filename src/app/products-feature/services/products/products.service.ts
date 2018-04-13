import { Injectable } from '@angular/core';

import { ProductsHttpService } from '../../../core/services/index';
import { Product } from '../../../core/models';
import { ProductItem } from '../../models/product-item.model';
import { CartService } from '../cart/cart.service';
import { concatMap, catchError } from 'rxjs/operators';
import { CommentsHttpService } from '../../../core/services/products-http/comments-http.service';

@Injectable()
export class ProductsService {
  constructor(
    private productsHttpService: ProductsHttpService,
    private commentsService: CommentsHttpService,
    private cartService: CartService
  ) { }

  getProducts(): Promise<ProductItem[]> {
    return this.productsHttpService.get()
      .toPromise()
      .then(response => response.map(this.mapTo))
      .catch(response => Promise.resolve(Product[0]));
  }

  getById(id: number): Promise<ProductItem> {
    return this.productsHttpService.getById(id)
      .toPromise()
      .then(response => this.mapTo(response))
      .catch(response => Promise.resolve<ProductItem>(null));
  }

  getComments(id: number): Promise<string[]> {
    return this.productsHttpService.getById(id)
      .pipe(
        concatMap(product => this.commentsService.get(product.id))
      )
      .toPromise()
      .then(comments => comments.map(comment => comment.body))
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
