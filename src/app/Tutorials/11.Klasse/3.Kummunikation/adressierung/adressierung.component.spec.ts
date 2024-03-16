import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressierungComponent } from './adressierung.component';

describe('AdressierungComponent', () => {
  let component: AdressierungComponent;
  let fixture: ComponentFixture<AdressierungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressierungComponent]
    });
    fixture = TestBed.createComponent(AdressierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
