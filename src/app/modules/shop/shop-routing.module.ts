import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    ShopContainerComponent,
    ProductComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductReviewComponent,
    CategoryItemComponent,
    CategoryListComponent,
    ContentComponent,
    HeaderComponent,
    TopHeaderComponent,
    MyFooterComponent,
    SidebarComponent,
    LoginModalComponent,
    LoginInputFieldsComponent,
    RegisterModalComponent,
    RegisterInputFieldsComponent

} from '.';

import { AdminGuard } from 'app/common/guards/AdminGuard';
import { IsAdminService} from 'app/common/services/is-admin.service';
import { CartListComponent } from 'app/modules/cart/cart-list/cart-list.component';

const routes: Routes = [
    {
        path: '',
        component: ShopContainerComponent,
        children: [
            {
                path: '', redirectTo: '/products', pathMatch: 'full'
            },
            {
                path: 'products', component: ProductsComponent
            },
            { path: 'product/:id', component: ProductComponent},
            { path: 'cart', component: CartListComponent}
        ]
    }

];

export const shopComponents = [
    ShopContainerComponent,
    ProductComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductReviewComponent,
    CategoryItemComponent,
    CategoryListComponent,
    ContentComponent,
    HeaderComponent,
    TopHeaderComponent,
    MyFooterComponent,
    SidebarComponent,
    LoginModalComponent,
    LoginInputFieldsComponent,
    RegisterModalComponent,
    RegisterInputFieldsComponent
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [AdminGuard, IsAdminService]
})
export class ShopRoutingModule {}

