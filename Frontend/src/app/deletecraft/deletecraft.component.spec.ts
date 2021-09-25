import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecraftComponent } from './deletecraft.component';

describe('DeletecraftComponent', () => {
  let component: DeletecraftComponent;
  let fixture: ComponentFixture<DeletecraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
