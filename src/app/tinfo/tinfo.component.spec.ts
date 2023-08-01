import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinfoComponent } from './tinfo.component';

describe('TinfoComponent', () => {
  let component: TinfoComponent;
  let fixture: ComponentFixture<TinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinfoComponent]
    });
    fixture = TestBed.createComponent(TinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
