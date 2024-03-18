import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlensystemeComponent } from './zahlensysteme.component';

describe('ZahlensystemeComponent', () => {
  let component: ZahlensystemeComponent;
  let fixture: ComponentFixture<ZahlensystemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZahlensystemeComponent]
    });
    fixture = TestBed.createComponent(ZahlensystemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
