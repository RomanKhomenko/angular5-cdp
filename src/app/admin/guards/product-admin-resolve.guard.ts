import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { map, delay, tap, catchError } from 'rxjs/operators';
import { ProductItem } from '../../products-feature/models/product-item.model';
import { ProductsService } from '../../products-feature/services/products/products.service';

@Injectable()
export class ProductAdminResolveGuard implements Resolve<ProductItem> {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<ProductItem | null> {
    if (!route.paramMap.has('id')) {
      return Promise.resolve(new ProductItem(-1, '', '', 0, 0));
    }

    const id = +route.paramMap.get('id');
    return this.productService.getById(id)
      .then(response => response);
  }
}
