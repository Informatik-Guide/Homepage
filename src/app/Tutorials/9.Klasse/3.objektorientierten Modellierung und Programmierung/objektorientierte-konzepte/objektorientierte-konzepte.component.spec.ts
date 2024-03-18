import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektorientierteKonzepteComponent } from './objektorientierte-konzepte.component';

describe('ObjektorientierteKonzepteComponent', () => {
  let component: ObjektorientierteKonzepteComponent;
  let fixture: ComponentFixture<ObjektorientierteKonzepteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjektorientierteKonzepteComponent]
    });
    fixture = TestBed.createComponent(ObjektorientierteKonzepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
