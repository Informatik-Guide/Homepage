import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektorientiertesDatenmodell10Component } from './objektorientiertes-datenmodell.component';

describe('ObjektorientiertesDatenmodellComponent', () => {
  let component: ObjektorientiertesDatenmodell10Component;
  let fixture: ComponentFixture<ObjektorientiertesDatenmodell10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjektorientiertesDatenmodell10Component]
    });
    fixture = TestBed.createComponent(ObjektorientiertesDatenmodell10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
