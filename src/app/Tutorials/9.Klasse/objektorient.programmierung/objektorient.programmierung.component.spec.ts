import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektorientProgrammierungComponent } from './objektorient.programmierung.component';

describe('ObjektorientProgrammierungComponent', () => {
  let component: ObjektorientProgrammierungComponent;
  let fixture: ComponentFixture<ObjektorientProgrammierungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjektorientProgrammierungComponent]
    });
    fixture = TestBed.createComponent(ObjektorientProgrammierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
