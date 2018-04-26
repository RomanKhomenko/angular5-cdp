import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { AppState, getProductsLoaded, GetProducts } from './../../core/+store';


import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, switchMap, take, tap } from 'rxjs/operators';

@Injectable()
export class ProductsStatePreloadingGuard implements CanActivate {

    constructor(
        private store: Store<AppState>
    ) {}

    canActivate() {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    private checkStore(): Observable<boolean> {
      return this.store.pipe(
        select(getProductsLoaded),
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new GetProducts());
          }
        }),
        take(1)
      );
    }}
