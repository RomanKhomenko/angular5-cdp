import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Product } from '../../models/index';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { ProductsAPI } from './json-server-config';

@Injectable()
export class ProductsHttpService {
  private products: Product[];

  constructor(
    private http: HttpClient,
    @Inject(ProductsAPI) private url
  ) { }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, { params:  new HttpParams().set('perf', 'true')})
      .pipe(
        (response) => response,
        catchError(this.handleError)
      );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`, { params:  new HttpParams().set('perf', 'true')})
      .pipe(
        (response) => response,
        catchError(this.handleError)
      );
  }

  createProduct (product: Product): Promise<Product> {
    const productDto = {...product};
    productDto.id = Math.floor(Math.random() * 90 + 10);

    return this.http.post<Product>(this.url, productDto)
      .toPromise();
  }

  updateProduct (product: Product) {
    const productDto = {...product};

    return this.http.put<Product>(`${this.url}/${productDto.id}`, productDto)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return _throw(errorMessage);
  }
}
