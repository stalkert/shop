import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { CartModule } from './modules/cart/cart.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { TopHeaderComponent } from './layout/header/top-header/top-header.component';
import { ContentComponent } from './layout/content/content.component';
import { MyFooterComponent } from './layout/my-footer/my-footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginModalComponent } from './layout/header/top-header/login-modal/login-modal.component';
import { LoginInputFieldsComponent } from './layout/header/top-header/login-modal/login-input-fields/login-input-fields.component';
import { RegisterModalComponent } from './layout/header/top-header/register-modal/register-modal.component';
import { RegisterInputFieldsComponent } from './layout/header/top-header/register-modal/register-input-fields/register-input-fields.component';
import { ShopComponent } from './shop.component';
import { AdminComponent } from './admin/admin.component';




import { IsAuthorizedService }  from './common/services/is-authorized.service';
import { LoginService } from './common/services/login.service';
import { CartService } from './common/services/cart.service';
import { CategoryListComponent } from './layout/sidebar/category-list/category-list.component';
import { CategoryItemComponent } from './layout/sidebar/category-list/category-item/category-item.component';
import {CategoriesService} from "./common/services/categories.service";
import {ProductsService} from "./common/services/products.service";
import { ProductsComponent } from './layout/content/products/products.component';
import { ProductItemComponent } from './layout/content/products/product-item/product-item.component';
import { ProductReviewComponent } from './layout/content/products/product-item/product-review/product-review.component';
import { ProductComponent } from './layout/content/product/product.component';
import { MainContentComponent } from './layout/content/main.content.component';




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
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    AngularFireModule.initializeApp(myFirebaseConfig, 'angular2-shop'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    CartModule
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
