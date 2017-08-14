/*
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderResolveGuard } from 'app/common/guards/order-resolve.guard';

import {
    CartComponent,
    CartItemComponent,
    CartListComponent,
    OrderItemComponent,
    ProcessOrderComponent
} from '.';

const routes: Routes = [
    {
        path: 'cart',
        component: CartListComponent,
    },
    {
        path: 'order-confirmation',
        component: ProcessOrderComponent,
        resolve: {
            category: OrderResolveGuard
        }
    }

];

export const cartComponents = [
    CartComponent,
    CartItemComponent,
    CartListComponent,
    ProcessOrderComponent,
    OrderItemComponent
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class CartRoutingModule {}
*/
