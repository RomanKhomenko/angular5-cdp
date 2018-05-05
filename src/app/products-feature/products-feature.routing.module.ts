import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-list/product-details/product-details.component';
import { ProductResolveGuard } from './guards/product-resolve.guard';
import { ProductCommentsComponent } from './components/product-list/product-details/comment/product-comments.component';
import * as Guards from './guards';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
    canActivate: [Guards.ProductsStatePreloadingGuard],
  },
  {
    path: 'products/details/:productId',
    component: ProductDetailsComponent,
    resolve: {
      product: ProductResolveGuard
    },
    canActivate: [Guards.ProductsStatePreloadingGuard],
    children: [
      { path: 'comments', component: ProductCommentsComponent, outlet: 'product-comments' },
    ]
  },
  { path: 'cart', pathMatch: 'full', component: CartComponent },
  { path: 'proceed-order', pathMatch: 'full', component: OrderComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductFeatureRoutingModule { }
export let routerComponents = [OrderComponent, CartComponent, ProductListComponent, ProductCommentsComponent, ProductDetailsComponent];
