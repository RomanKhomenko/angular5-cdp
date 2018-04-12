import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-list/product-details/product-details.component';
import { ProductResolveGuard } from './guards/product-resolve.guard';
import { ProductCommentsComponent } from './components/product-list/product-details/comment/product-comments.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'products/details/:productId',
    component: ProductDetailsComponent,
    resolve: {
      product: ProductResolveGuard
    },
    children: [
      { path: 'comments', component: ProductCommentsComponent, outlet: 'product-comments' },
    ]
  },
  { path: 'cart', pathMatch: 'full', component: CartComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductFeatureRoutingModule { }
export let routerComponents = [CartComponent, ProductListComponent, ProductCommentsComponent, ProductDetailsComponent];
