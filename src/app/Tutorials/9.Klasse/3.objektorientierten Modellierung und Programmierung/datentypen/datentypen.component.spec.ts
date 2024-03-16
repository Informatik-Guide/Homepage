import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatentypenComponent } from './datentypen.component';

describe('DatentypenComponent', () => {
  let component: DatentypenComponent;
  let fixture: ComponentFixture<DatentypenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatentypenComponent]
    });
    fixture = TestBed.createComponent(DatentypenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
