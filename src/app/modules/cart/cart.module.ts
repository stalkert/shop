import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CartService } from '../../common/services/cart.service';
import {
    CartComponent,
    CartItemComponent,
    CartListComponent,
    OrderItemComponent,
    OrderFormComponent,
    OrderConfirmationComponent
} from '.';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
  ],
    declarations: [
        CartComponent,
        CartItemComponent,
        CartListComponent,
        OrderItemComponent,
        OrderFormComponent,
        OrderConfirmationComponent],
    providers: [CartService],
    exports: [
        CartComponent,
        CartItemComponent,
        CartListComponent,
        OrderItemComponent,
        OrderFormComponent,
        OrderConfirmationComponent
    ]
})
export class CartModule { }
