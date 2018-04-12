import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductAdminResolveGuard } from './guards/product-admin-resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      { path: 'products', pathMatch: 'full', component: ProductListComponent },
      { path: 'products/edit/:id', pathMatch: 'full', resolve: { product: ProductAdminResolveGuard }, component: ProductFormComponent },
      { path: 'products/add', pathMatch: 'full', resolve: { product: ProductAdminResolveGuard }, component: ProductFormComponent },
      { path: 'orders', pathMatch: 'full', component: OrdersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export let routingComponents = [AdminComponent, OrdersComponent, ProductFormComponent];
