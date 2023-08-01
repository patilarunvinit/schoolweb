import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattendanceComponent } from './tattendance.component';

describe('TattendanceComponent', () => {
  let component: TattendanceComponent;
  let fixture: ComponentFixture<TattendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TattendanceComponent]
    });
    fixture = TestBed.createComponent(TattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
