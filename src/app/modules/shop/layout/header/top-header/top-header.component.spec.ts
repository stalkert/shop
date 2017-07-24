/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IsAuthorizedService }  from '../../common/services/is-authorized.service';

import { TopHeaderComponent } from './top-header.component';
import {LoginModalComponent} from "./login-modal/login-modal.component";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AngularFireModule } from 'angularfire2';
import {LoginInputFieldsComponent} from "./login-modal/login-input-fields/login-input-fields.component";
import {RegisterModalComponent} from "./register-modal/register-modal.component";
import {RegisterInputFieldsComponent} from "./register-modal/register-input-fields/register-input-fields.component";


/*describe('TopHeaderComponent', () => {
  let component: TopHeaderComponent;
  let fixture: ComponentFixture<TopHeaderComponent>;
  let IsAutorisatedServiceTest: IsAutorisatedService;
  let IsAutorisatedServiceTest1;
  let spy;
  /!*let service={
    isAuthorized: false,
     emailUser: ''
     };*!/
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [  TopHeaderComponent ,
        LoginModalComponent,
        RegisterModalComponent,
        LoginInputFieldsComponent,
        RegisterInputFieldsComponent],
      imports: [Ng2Bs3ModalModule, FormsModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyAls0r-EM0QpAPFfuTlz6PyvC0hNhLnBik",
          authDomain: "angular2-shop.firebaseapp.com",
          databaseURL: "https://angular2-shop.firebaseio.com",
          storageBucket: "angular2-shop.appspot.com",
          messagingSenderId: "359111226316"
        }, {
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        })
      ],
      providers: [{provide:IsAutorisatedService, useValue: IsAutorisatedServiceTest}]
    }).compileComponents();
    fixture = TestBed.createComponent(TopHeaderComponent);
    IsAutorisatedServiceTest1 = TestBed.get(IsAutorisatedServiceTest);
    spy = spyOn(IsAutorisatedServiceTest1 , 'checkLoginUser')
      .and.returnValue(Promise.resolve(IsAutorisatedServiceTest1));
    component = fixture.componentInstance;

    fixture.detectChanges();


  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should isAuthorized=false by default', () => {

    expect(IsAutorisatedServiceStub.emailUser).toBe('');
  });

});*/
