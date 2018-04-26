import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { ProductsService } from '../../../products-feature/services/products/products.service';
import { ProductItem } from '../../../products-feature/models/product-item.model';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../core/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Store<ReadonlyArray<Product>>;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onCreateProduct () {

  }

  onEditProduct () {

  }
}
