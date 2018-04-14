import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import {
  ConstantsService,
  ProductsHttpService,
  LocalStorageService,
  ConfigOptionsService,
  CONFIG,
  GENERATOR,
  GeneratorFactory,
  GeneratorService,
  AppSettingsService,
  CommentsHttpService,
  AuthService
} from './services/index';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TimingInterceptor } from './interceptors/timing-iterceptor';
import { ProductsAPIProvider, CommentsAPIProvider } from './services/products-http/json-server-config';

const constantsInst = new ConstantsService();

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ProductsHttpService,
    CommentsHttpService,
    HttpClient,
    LocalStorageService,
    GeneratorService,
    AuthService,
    { provide: ConstantsService, useValue: constantsInst },
    { provide: CONFIG, useClass: ConfigOptionsService },
    { provide: GENERATOR, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
    ProductsAPIProvider,
    CommentsAPIProvider,
    AppSettingsService
  ],
  declarations: [
    HeaderComponent,
    NotFound404Component,
    LoginComponent
  ]
})
export class CoreModule { }
