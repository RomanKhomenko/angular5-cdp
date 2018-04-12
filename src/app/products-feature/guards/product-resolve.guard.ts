import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { map, delay, tap, catchError } from 'rxjs/operators';
import { ProductsService } from '../services/products/products.service';
import { ProductItem } from '../models/product-item.model';

@Injectable()
export class ProductResolveGuard implements Resolve<ProductItem> {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<ProductItem | null> {
    if (!route.paramMap.has('productId')) {
      Promise.reject('error');
    }

    const id = +route.paramMap.get('productId');
    return this.productService.getById(id);
  }
}
