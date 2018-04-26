import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RouterActions from './router.actions';

import { tap, pluck } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType<RouterActions.Go>(RouterActions.RouterActionTypes.GO),
    pluck('payload'),
    tap(({ path, queryParams, extras }) => {
      this.router.navigate(path, ...extras);
    })
  );
}
