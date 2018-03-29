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

const constantsInst = new ConstantsService();

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
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
    HeaderComponent
  ]
})
export class CoreModule { }
