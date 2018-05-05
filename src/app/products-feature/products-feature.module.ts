import { NgModule, Injector, ReflectiveInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

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
import { reducer } from '../core/+store/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../core/+store/products/products.effects';
import { ProductsStatePreloadingGuard } from './guards';
import { EmailDirective } from './validators/emaill.directive';
import { AsyncEmailValidatorDirective } from './validators/async-email-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductsEffects]),

    ProductFeatureRoutingModule,
  ],
  declarations: [
    CartItemComponent,
    ProductComponent,
    routerComponents,
    EmailDirective,
    AsyncEmailValidatorDirective
  ],
  providers: [
    ProductResolveGuard,
    ProductsService,
    CartService,
    ProductsStatePreloadingGuard
  ],
  exports: [
    ProductListComponent,
    CartComponent,

    ProductFeatureRoutingModule
  ]
})
export class ProductsFeatureModule { }
