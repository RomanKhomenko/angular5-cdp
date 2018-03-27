import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { ProductsHttpService } from './services/products-http/products-http.service';

@NgModule({
  exports: [
    HeaderComponent
  ],
  providers: [
    ProductsHttpService
  ],
  declarations: [
    HeaderComponent
  ]
})
export class CoreModule { }
