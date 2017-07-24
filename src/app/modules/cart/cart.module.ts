import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { cartComponents, CartRoutingModule } from './cart-routing.module';
import { CartService } from '../../common/services/cart.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CartRoutingModule
  ],
    declarations: [cartComponents],
    providers: [CartService],
    exports: [cartComponents]
})
export class CartModule { }
