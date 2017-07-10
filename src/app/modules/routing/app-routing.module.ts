import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent }   from 'app/shop.component';
import { AdminComponent }      from 'app/admin/admin.component';
import { ProductComponent }      from '../../layout/content/product/product.component';
import { MainContentComponent }      from '../../layout/content/main.content.component';
import { ContentComponent }      from '../../layout/content/content.component';


import { AdminGuard } from 'app/admin/AdminGuard';
import { IsAdminService} from 'app/modules/routing/is-admin.service';

const routes: Routes = [
  { path: '',  component: ShopComponent,
    children: [
      {
        path: '', redirectTo: '/products', pathMatch: 'full'
      },
      {
        path: 'products', component: ContentComponent,
        children: [
          {
            path: '', component: MainContentComponent,
          },

          {
            path: ':id', component: ProductComponent
          }
        ]
      }
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
