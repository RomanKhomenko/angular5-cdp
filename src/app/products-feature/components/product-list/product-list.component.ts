import { Component, Output, EventEmitter, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from '../../services/products/products.service';
import { ProductItem } from '../../models/product-item.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponent implements OnInit {
  resolveFn: Function|null = null;

  public products: Promise<ProductItem[]> = new Promise<ProductItem[]>(resolve => this.resolveFn = resolve);

  constructor(
    public productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .then(resp => this.resolveFn(resp));
  }

  move(product: ProductItem) {
    this.productService.moveToCart(product);
  }

  navigate(product: ProductItem) {
    const link = ['details', product.id];
    this.router.navigate(link, {relativeTo: this.route });
  }
}
