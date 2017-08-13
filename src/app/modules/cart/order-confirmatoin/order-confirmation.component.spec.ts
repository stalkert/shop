import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmatoinComponent } from './order-confirmation.component';

describe('OrderConfirmatoinComponent', () => {
  let component: OrderConfirmatoinComponent;
  let fixture: ComponentFixture<OrderConfirmatoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmatoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmatoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
