import { NgModule, Injector, ReflectiveInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsHttpService } from '../core/services/products-http/products-http.service';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products/products.service';
import { CartService } from './services/cart/cart.service';
import { SharedModule } from '../shared/modules/shared.module';
import { ProductFeatureRoutingModule, routerComponents } from './products-feature.routing.module';
import { ProductDetailsComponent } from './components/product-list/product-details/product-details.component';
import { ProductResolveGuard } from './guards/product-resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,

    ProductFeatureRoutingModule
  ],
  declarations: [
    CartItemComponent,
    ProductComponent,
    routerComponents
  ],
  providers: [
    ProductResolveGuard,
    ProductsService,
    CartService
  ],
  exports: [
    ProductListComponent,
    CartComponent,

    ProductFeatureRoutingModule
  ]
})
export class ProductsFeatureModule { }
