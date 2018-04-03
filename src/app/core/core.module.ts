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
    HttpClient,
    LocalStorageService,
    GeneratorService,
    { provide: ConstantsService, useValue: constantsInst },
    { provide: CONFIG, useClass: ConfigOptionsService },
    { provide: GENERATOR, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
  ],
  declarations: [
    HeaderComponent,
    NotFound404Component
  ]
})
export class CoreModule { }
