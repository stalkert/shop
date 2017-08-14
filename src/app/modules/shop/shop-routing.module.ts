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

import { AdminGuard, OrderResolveGuard, OrderSuccessResolveGuard } from 'app/common/guards/.';
import { IsAdminService} from 'app/common/services/is-admin.service';
import { CartListComponent, ProcessOrderComponent, OrderSuccessComponent } from 'app/modules/cart/.';

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
            { path: 'cart', component: CartListComponent},
            {
                path: 'order-confirmation',
                component: ProcessOrderComponent,
                resolve: {
                    order: OrderResolveGuard
                }
            },
            {
                path: 'order-success',
                component: OrderSuccessComponent,
                resolve: {
                    orderSuccess: OrderSuccessResolveGuard
                }
            },
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

