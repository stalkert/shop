import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    CartComponent,
    CartItemComponent,
    CartListComponent
} from '.';

const routes: Routes = [
    {
        path: 'cart',
        component: CartListComponent,
    }

];

export const cartComponents = [
    CartComponent,
    CartItemComponent,
    CartListComponent
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class CartRoutingModule {}
