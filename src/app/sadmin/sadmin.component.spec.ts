import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadminComponent } from './sadmin.component';

describe('SadminComponent', () => {
  let component: SadminComponent;
  let fixture: ComponentFixture<SadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadminComponent]
    });
    fixture = TestBed.createComponent(SadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
