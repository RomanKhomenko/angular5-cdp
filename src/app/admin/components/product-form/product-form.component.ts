import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

// rxjs
import { ProductsService } from '../../../products-feature/services/products/products.service';
import { ProductsHttpService } from '../../../core/services';
import { Product } from '../../../core/models';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductsHttpService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // data is an observable object
    // which contains custom and resolve data
    this.route.data.subscribe(data => {
      this.product = { ...data.product };
    });
  }

  submit() {
    const product = { ...this.product };

    const method = product.id > 0 ? 'updateProduct' : 'createProduct';
    this.productService[method](product)
      .then((id: number) => {
        id > 0
          ? this.router.navigate(['products'])
          : this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }
}
