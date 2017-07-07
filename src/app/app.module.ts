import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { ContentComponent } from './content/content.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModalComponent } from './header/top-header/login-modal/login-modal.component';
import { LoginInputFieldsComponent } from './header/top-header/login-modal/login-input-fields/login-input-fields.component';
import { RegisterModalComponent } from './header/top-header/register-modal/register-modal.component';
import { RegisterInputFieldsComponent } from './header/top-header/register-modal/register-input-fields/register-input-fields.component';
import { ShopComponent } from './shop.component';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule }     from './modules/routing/app-routing.module';


import { IsAuthorizedService }  from './services/is-authorized.service';
import { LoginService } from './services/login.service';
import { CartService } from './services/cart.service';
import { CategoryListComponent } from './sidebar/category-list/category-list.component';
import { CategoryItemComponent } from './sidebar/category-list/category-item/category-item.component';
import {CategoriesService} from "./services/categories.service";
import {ProductsService} from "./services/products.service";
import { ProductsComponent } from './content/products/products.component';
import { ProductItemComponent } from './content/products/product-item/product-item.component';
import { ProductReviewComponent } from './content/products/product-item/product-review/product-review.component';
import { ProductComponent } from './content/product/product.component';
import { MainContentComponent } from './content/main.content.component';
import { CartComponent } from './header/cart/cart.component';




export const myFirebaseConfig = {
  apiKey: "AIzaSyAls0r-EM0QpAPFfuTlz6PyvC0hNhLnBik",
  authDomain: "angular2-shop.firebaseapp.com",
  databaseURL: "https://angular2-shop.firebaseio.com",
  projectId: "angular2-shop",
  storageBucket: "angular2-shop.appspot.com",
  messagingSenderId: "359111226316"
};

/*const myFirebaseAuthConfig = {
 provider: AuthProviders.Password,
 method: AuthMethods.Password
 };*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    MainContentComponent,
    ContentComponent,
    MyFooterComponent,
    SidebarComponent,
    LoginModalComponent,
    LoginInputFieldsComponent,
    RegisterModalComponent,
    RegisterInputFieldsComponent,
    ShopComponent,
    AdminComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductReviewComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    AngularFireModule.initializeApp(myFirebaseConfig, 'angular2-shop'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
      IsAuthorizedService,
      LoginService,
      CategoriesService,
      CartService,
      ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
