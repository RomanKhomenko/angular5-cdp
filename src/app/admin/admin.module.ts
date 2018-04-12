import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { ProductAdminResolveGuard } from './guards/product-admin-resolve.guard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AdminRoutingModule
  ],
  declarations: [AdminComponent, routingComponents, ProductListComponent, ProductFormComponent, OrdersComponent],
  providers: [AdminAuthGuard, ProductAdminResolveGuard]
})
export class AdminModule { }
