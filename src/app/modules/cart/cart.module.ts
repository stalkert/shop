import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CartService } from '../../common/services/cart.service';
import {
    CartComponent,
    CartItemComponent,
    CartListComponent,
    OrderItemComponent,
    OrderFormComponent,
    OrderSuccessComponent,
    ProcessOrderComponent
} from '.';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
  ],
    declarations: [
        CartComponent,
        CartItemComponent,
        CartListComponent,
        OrderItemComponent,
        OrderFormComponent,
        ProcessOrderComponent,
        OrderSuccessComponent],
    providers: [CartService],
    exports: [
        CartComponent,
        CartItemComponent,
        CartListComponent,
        OrderItemComponent,
        OrderFormComponent,
        OrderSuccessComponent,
        ProcessOrderComponent
    ]
})
export class CartModule { }
