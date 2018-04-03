import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsHttpService } from '../core/services/products-http/products-http.service';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products/products.service';
import { CartService } from './services/cart/cart.service';
import { ProductCommunicationService } from './services/communication/product-communication.service';
import { SharedModule } from '../shared/modules/shared.module';
import { ProductFeatureRoutingModule } from './products-feature.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,

    ProductFeatureRoutingModule
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

    ProductFeatureRoutingModule
  ]
})
export class ProductsFeatureModule { }
