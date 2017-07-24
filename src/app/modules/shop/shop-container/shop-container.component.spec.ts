import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopContainerComponent } from './shop-container.component';

describe('ShopContainerComponent', () => {
  let component: ShopContainerComponent;
  let fixture: ComponentFixture<ShopContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
