/*


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule} from '@angular/router/testing';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { ShopComponent }   from 'app/shop.component';
import { AdminComponent }      from 'app/admin/admin.component';
import { ProductComponent }      from 'app/content/product/product.component';
import { MainContentComponent }      from 'app/content/main.content.component';
import { ContentComponent }      from 'app/content/content.component';


import { AdminGuard } from 'app/admin/AdminGuard';
import { IsAdminService} from 'app/modules/routing/is-admin.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModalComponent } from './header/top-header/login-modal/login-modal.component';
import { LoginInputFieldsComponent } from './header/top-header/login-modal/login-input-fields/login-input-fields.component';
import { RegisterModalComponent } from './header/top-header/register-modal/register-modal.component';
import { RegisterInputFieldsComponent } from './header/top-header/register-modal/register-input-fields/register-input-fields.component';

import { AppRoutingModule }     from './modules/routing/app-routing.module';


import { IsAuthorizedService }  from './services/is-authorized.service';
import { CategoryListComponent } from './sidebar/category-list/category-list.component';
import { CategoryItemComponent } from './sidebar/category-list/category-item/category-item.component';
import {CategoriesService} from "./services/categories.service";
import {ProductsService} from "./services/products.service";
import { ProductsComponent } from './content/products/products.component';
import { ProductItemComponent } from './content/products/product-item/product-item.component';
import { ProductReviewComponent } from './content/products/product-item/product-review/product-review.component';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
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
        FormsModule,
        HttpModule,
        Ng2Bs3ModalModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyAls0r-EM0QpAPFfuTlz6PyvC0hNhLnBik",
          authDomain: "angular2-shop.firebaseapp.com",
          databaseURL: "https://angular2-shop.firebaseio.com",
          storageBucket: "angular2-shop.appspot.com",
          messagingSenderId: "359111226316"
        }, {
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        }),
        RouterTestingModule.withRoutes(
          [
            { path: '',  component: ShopComponent,
              children: [
                {
                  path: '', redirectTo: '/products', pathMatch: 'full'
                },
                {
                  path: 'products', component: ContentComponent,
                  children: [
                    {
                      path: '', component: MainContentComponent,
                    },

                    {
                      path: ':id', component: ProductComponent
                    }
                  ]
                }
              ]
            },
            { path: 'admin', component: AdminComponent , canActivate: [AdminGuard]},
            { path: '**', redirectTo: '/products', pathMatch: 'full'  }
          ])],
      providers:[{provide:IsAutorisatedService}]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
