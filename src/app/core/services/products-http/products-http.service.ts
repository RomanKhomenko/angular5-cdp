import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/index';

@Injectable()
export class ProductsHttpService {
  private products: Product[];

  constructor(private http: HttpClient) { }

  get(): Promise<Product[]> {
    return this.http.get<Product[]>('./assets/data.json')
      .toPromise()
      .catch(this.handleError);
  }

  getById(id: number): Promise<Product> {
    return this.get()
      .then(response => response.find((product) => +product.id === id));
  }

  createProduct (product: Product): Promise<number> {
    const productDto = {...product};
    productDto.id = Math.floor(Math.random() * 90 + 10);
    return this.http.put('./assets/data.json', product)
      .toPromise()
      .then(response => productDto.id);
  }

  updateProduct (product: Product) {
    const productDto = {...product};
    return this.http.post('./assets/data.json', product)
      .toPromise()
      .then(response => productDto.id);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
