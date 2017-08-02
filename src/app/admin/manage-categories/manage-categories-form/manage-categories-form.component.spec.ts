import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriesFormComponent } from './manage-categories-form.component';

describe('ManageCategoriesFormComponent', () => {
  let component: ManageCategoriesFormComponent;
  let fixture: ComponentFixture<ManageCategoriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCategoriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
