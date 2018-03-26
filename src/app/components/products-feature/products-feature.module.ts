import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsHttpService } from '../core/services/products/products-http.service';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products/products.service';
import { CartService } from './services/cart/cart.service';
import { ProductCommunicationService } from './services/communication/product-communication.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    ProductComponent,
    ProductListComponent
  ],
  providers: [
    ProductsService,
    CartService,
    ProductCommunicationService
  ],
  exports: [
    ProductListComponent,
    CartComponent,
  ]
})
export class ProductsFeatureModule { }
