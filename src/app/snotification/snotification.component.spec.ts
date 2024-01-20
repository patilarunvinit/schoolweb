import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnotificationComponent } from './snotification.component';

describe('SnotificationComponent', () => {
  let component: SnotificationComponent;
  let fixture: ComponentFixture<SnotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnotificationComponent]
    });
    fixture = TestBed.createComponent(SnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
