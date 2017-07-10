import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent }   from 'app/shop.component';
import { AdminComponent }      from 'app/admin/admin.component';
import { ProductComponent }      from '../../layout/content/product/product.component';
import { ProductsComponent }      from '../../layout/content/products/products.component';
import { ContentComponent }      from '../../layout/content/content.component';


import { AdminGuard } from 'app/admin/AdminGuard';
import { IsAdminService} from 'app/modules/routing/is-admin.service';
import {CartListComponent} from "app/modules/cart/components/cart-list/cart-list.component";

const routes: Routes = [
  { path: '',  component: ShopComponent,
    children: [
      {
        path: '', redirectTo: '/products', pathMatch: 'full'
      },
      {
        path: 'products', component: ProductsComponent,
        children: [
          {
            path: ':id', component: ProductComponent
          }
        ]
      },
      { path: 'cart', component: CartListComponent }
    ]
  },
  { path: 'admin', component: AdminComponent , canActivate: [AdminGuard]},
  { path: '**', redirectTo: '/products', pathMatch: 'full'  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers:[AdminGuard, IsAdminService]
})
export class AppRoutingModule {}
