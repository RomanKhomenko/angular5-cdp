import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../../../services/products/products.service';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductCommentsComponent implements OnInit {
  public comments$;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.comments$ = this.route.parent.paramMap
      .pipe(
        switchMap((params: Params) => {
          return params.get('productId')
            ? this.productService.getComments(+params.get('productId'))
            : Promise.resolve([]);
      }));
  }
}
