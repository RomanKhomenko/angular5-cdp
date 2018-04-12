import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductItem } from '../../../models/product-item.model';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailsComponent implements OnInit {
  public isCommentsShow: boolean;
  public product: ProductItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.product = data.product;
    });
  }

  onCommentsShow (): void {
    this.router.navigate([{ outlets: { 'product-comments': [this.isCommentsShow ? '' : 'comments'] } }], {relativeTo: this.route});
  }

  onActivate () {
    this.isCommentsShow = true;
  }

  onDeactivate () {
    this.isCommentsShow = false;
  }

  onAddToCart () {
    this.productService.moveToCart(this.product);
  }
}
