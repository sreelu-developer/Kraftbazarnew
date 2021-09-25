import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateproductsComponent } from './validateproducts.component';

describe('ValidateproductsComponent', () => {
  let component: ValidateproductsComponent;
  let fixture: ComponentFixture<ValidateproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
