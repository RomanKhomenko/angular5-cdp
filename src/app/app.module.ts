import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsFeatureModule } from './products-feature/products-feature.module';
import { DemoComponent } from './demo-task-3/components/demo/demo.component';
import { HostClickDirective } from './demo-task-3/derictives/hostclick.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HostClickDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
