import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products-feature/services/products/products.service';
import { ProductItem } from '../../../products-feature/models/product-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Promise<ProductItem[]>;
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
