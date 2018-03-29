import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, ProductInterface } from '../../models/index';

@Injectable()
export class ProductsHttpService {
  private products: Product[];

  constructor(private http: HttpClient) { }

  get(): Promise<ProductInterface[]> {
    return new Promise<ProductInterface[]>((resolve, reject) => {
      this.http.get<Product[]>('./assets/data.json')
        .subscribe(
          (resp) => resolve(resp),
          (error) => {
            console.log(error);
            reject(error);
          }
        );
      }
    );
  }
}
