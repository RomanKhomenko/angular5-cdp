import { Component, Output, EventEmitter, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { ProductsService } from '../../services/products/products.service';
import { ProductItem } from '../../models/product-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/models';
import { GetProducts, AppState, ProductsState } from '../../../core/+store';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponent implements OnInit {
  resolveFn: Function|null = null;

  public products$: Store<ReadonlyArray<Product>>;

  constructor(
    public productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {  }

  ngOnInit(): void {
    this.getProducts();

    this.store.dispatch(new GetProducts());
  }

  getProducts() {
    this.products$ = this.productService.getProducts();
  }

  move(product: ProductItem) {
    this.productService.moveToCart(product);
  }

  navigate(product: ProductItem) {
    const link = ['details', product.id];
    // this.router.navigate(link, {relativeTo: this.route });
    const payload = {
      path: link,
      extras: { relativeTo: this.route }
    };
    this.store.dispatch(new RouterActions.Go(payload));
  }
}
