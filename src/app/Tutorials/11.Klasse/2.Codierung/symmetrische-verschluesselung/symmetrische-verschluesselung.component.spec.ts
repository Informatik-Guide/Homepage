import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetrischeVerschluesselungComponent } from './symmetrische-verschluesselung.component';

describe('SymmetrischeVerschluesselungComponent', () => {
  let component: SymmetrischeVerschluesselungComponent;
  let fixture: ComponentFixture<SymmetrischeVerschluesselungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymmetrischeVerschluesselungComponent]
    });
    fixture = TestBed.createComponent(SymmetrischeVerschluesselungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
