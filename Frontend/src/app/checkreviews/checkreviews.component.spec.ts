import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckreviewsComponent } from './checkreviews.component';

describe('CheckreviewsComponent', () => {
  let component: CheckreviewsComponent;
  let fixture: ComponentFixture<CheckreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
