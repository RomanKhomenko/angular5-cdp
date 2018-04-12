import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFound404Component } from './core/components/not-found404/not-found404.component';
import { AboutComponent } from './core/components/about/about.component';
import { ProductComponent } from './products-feature/components/product-list/product/product.component';
import { ProductListComponent } from './products-feature/components/product-list/product-list.component';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: NotFound404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
