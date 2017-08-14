import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './modules/shop/shop.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { AdminGuard, OrderResolveGuard, OrderSuccessResolveGuard } from 'app/common/guards/.';
import {
    IsAuthorizedService,
    LoginService,
    CartService,
    CategoriesService,
    ProductsService,
    IsAdminService,
    DialogService
} from './common/services';

export const myFirebaseConfig = {
  apiKey: 'AIzaSyAls0r-EM0QpAPFfuTlz6PyvC0hNhLnBik',
  authDomain: 'angular2-shop.firebaseapp.com',
  databaseURL: 'https://angular2-shop.firebaseio.com',
  projectId: 'angular2-shop',
  storageBucket: 'angular2-shop.appspot.com',
  messagingSenderId: '359111226316'
};

/*const myFirebaseAuthConfig = {
 provider: AuthProviders.Password,
 method: AuthMethods.Password
 };*/

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        Ng2Bs3ModalModule,
        AngularFireModule.initializeApp(myFirebaseConfig, 'angular2-shop'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        ShopModule,
        AdminModule,
        AppRoutingModule
  ],
  providers: [
      IsAuthorizedService,
      LoginService,
      CategoriesService,
      CartService,
      ProductsService,
      IsAdminService,
      DialogService,
      OrderResolveGuard,
      OrderSuccessResolveGuard,
      AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
