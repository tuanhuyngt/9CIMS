import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanloaiComponent } from './phanloai.component';

describe('PhanloaiComponent', () => {
  let component: PhanloaiComponent;
  let fixture: ComponentFixture<PhanloaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhanloaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
