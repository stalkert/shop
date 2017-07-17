import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './components/cart/cart.component';
import {CartService} from '../../common/services/cart.service';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {AppRoutingModule} from '../routing/app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
  ],
    declarations: [CartComponent, CartListComponent, CartItemComponent],
    providers: [CartService],
    exports: [CartComponent]
})
export class CartModule { }
