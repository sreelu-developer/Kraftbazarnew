import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckproductreviewComponent } from './checkproductreview.component';

describe('CheckproductreviewComponent', () => {
  let component: CheckproductreviewComponent;
  let fixture: ComponentFixture<CheckproductreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckproductreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckproductreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
