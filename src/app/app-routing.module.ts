import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from 'app/admin/admin.component';

import { AdminGuard } from 'app/common/guards/AdminGuard';
import { IsAdminService} from 'app/common/services/is-admin.service';

const routes: Routes = [
  { path: '',  loadChildren: 'app/modules/shop/shop.module#ShopModule'},
  { path: 'admin', component: AdminComponent , canActivate: [AdminGuard]},
  { path: '**', redirectTo: '/products', pathMatch: 'full'  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AdminGuard, IsAdminService]
})
export class AppRoutingModule {}
