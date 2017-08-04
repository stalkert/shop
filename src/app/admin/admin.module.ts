import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { adminRouterComponents, AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      AdminRoutingModule
  ],
  declarations: [adminRouterComponents]
})
export class AdminModule { }
