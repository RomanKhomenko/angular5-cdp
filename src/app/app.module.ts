import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './components/products/products.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductsService } from './components/x-shared/services/products/products.service';
import { ProductCommunicationService } from './components/x-shared/services/communication/product-communication.service';
import { ProductsCartCommunicationComponent } from './components/products-cart-communication/products-cart-communication.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsCartCommunicationComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule
  ],
  providers: [ProductsService, ProductCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
