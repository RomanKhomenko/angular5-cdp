import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsFeatureModule } from './products-feature/products-feature.module';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { AboutComponent } from './core/components/about/about.component';
import { AppSettingsService } from './core/services';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsFeatureModule,

    AppRoutingModule
  ],
  providers: [
    { provide: Window, useValue: window },
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
