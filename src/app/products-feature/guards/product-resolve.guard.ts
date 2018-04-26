import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, delay, tap, catchError, switchMap, take } from 'rxjs/operators';

// ngrx
import { Store, select } from '@ngrx/store';

import { ProductsService } from '../services/products/products.service';
import { ProductItem } from '../models/product-item.model';
import { AppState, getSelectedProductById, SetProduct } from '../../core/+store';
import { Product } from '../../core/models';

@Injectable()
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productService: ProductsService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  resolve(): Observable<Product> | null {
    return this.store.pipe(
      select((getSelectedProductById)),
      switchMap(product => {
        if (product) {
          return of(product);
        } else {
          this.router.navigate(['/products']);
          return of(null);
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products']);
        return of(null);
      })
    );
  }
}
