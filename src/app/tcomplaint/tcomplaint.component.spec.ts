import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcomplaintComponent } from './tcomplaint.component';

describe('TcomplaintComponent', () => {
  let component: TcomplaintComponent;
  let fixture: ComponentFixture<TcomplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcomplaintComponent]
    });
    fixture = TestBed.createComponent(TcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
