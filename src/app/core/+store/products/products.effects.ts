import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { ProductsHttpService } from '../../services';
import * as RouterActions from './../router/router.actions';
import { GetProducts,
  ProductsActionTypes, GetProductsSuccess, GetProductsError, CreateProduct, UpdateProduct, GetProduct } from './products.actions';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsHttpService: ProductsHttpService
  ) {}

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<GetProducts>(ProductsActionTypes.GET_PRODUCTS),
    switchMap((action: GetProducts) =>
      this.productsHttpService.get()
        .toPromise()
        .then(products => new GetProductsSuccess(products))
        .catch(err => new GetProductsError(err))
    )
  );

  @Effect()
  getProductSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<GetProduct>(ProductsActionTypes.GET_PRODUCT_SUCCESS),
    map(
      action => {
        return new RouterActions.Go({
          path: ['details', action.type]
        });
      }
    )
  );
}
