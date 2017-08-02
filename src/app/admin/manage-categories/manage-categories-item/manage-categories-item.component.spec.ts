import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriesItemComponent } from './manage-categories-item.component';

describe('ManageCategoriesItemComponent', () => {
  let component: ManageCategoriesItemComponent;
  let fixture: ComponentFixture<ManageCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
