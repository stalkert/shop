import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { CartModule } from '../cart/cart.module';
import { shopComponents, ShopRoutingModule } from './shop-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ShopRoutingModule,
        Ng2Bs3ModalModule,
        CartModule
    ],
    declarations: [shopComponents],
    exports: [shopComponents]
})
export class ShopModule { }
