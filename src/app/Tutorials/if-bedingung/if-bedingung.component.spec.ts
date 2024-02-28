import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfBedingungComponent } from './if-bedingung.component';

describe('IfBedingungComponent', () => {
  let component: IfBedingungComponent;
  let fixture: ComponentFixture<IfBedingungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfBedingungComponent]
    });
    fixture = TestBed.createComponent(IfBedingungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
