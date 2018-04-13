import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import {
  ConstantsService,
  ProductsHttpService,
  LocalStorageService,
  ConfigOptionsService,
  CONFIG,
  GENERATOR,
  GeneratorFactory,
  GeneratorService
} from './services/index';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { CommentsHttpService } from './services/products-http/comments-http.service';


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
  ],
  declarations: [
    HeaderComponent,
    NotFound404Component,
    LoginComponent
  ]
})
export class CoreModule { }
