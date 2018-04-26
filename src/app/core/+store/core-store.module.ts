import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './../../../environments/environment';

import { RouterStateSerializerProvider, routerReducers } from '.';
import { RouterEffects } from './router/router.effects';


@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forRoot({}),
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),

    EffectsModule.forRoot([RouterEffects]),

    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [],
  providers: [
    RouterStateSerializerProvider,
  ]
})
export class CoreStoreModule { }
