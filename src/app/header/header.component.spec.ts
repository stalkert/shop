/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import {TopHeaderComponent} from "./top-header/top-header.component";
import {LoginModalComponent} from "./top-header/login-modal/login-modal.component";
import {RegisterModalComponent} from "./top-header/register-modal/register-modal.component";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {LoginInputFieldsComponent} from "./top-header/login-modal/login-input-fields/login-input-fields.component";
import {RegisterInputFieldsComponent} from "./top-header/register-modal/register-input-fields/register-input-fields.component";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, TopHeaderComponent ,
        LoginModalComponent,
        RegisterModalComponent,
        LoginInputFieldsComponent,
        RegisterInputFieldsComponent],
      imports: [Ng2Bs3ModalModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
