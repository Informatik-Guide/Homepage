import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsymmetrischeVerschluesselungComponent } from './asymmetrische-verschluesselung.component';

describe('AsymmetrischeVerschluesselungComponent', () => {
  let component: AsymmetrischeVerschluesselungComponent;
  let fixture: ComponentFixture<AsymmetrischeVerschluesselungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsymmetrischeVerschluesselungComponent]
    });
    fixture = TestBed.createComponent(AsymmetrischeVerschluesselungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
