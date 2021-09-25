import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftlistComponent } from './craftlist.component';

describe('CraftlistComponent', () => {
  let component: CraftlistComponent;
  let fixture: ComponentFixture<CraftlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
