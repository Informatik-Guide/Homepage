import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturenComponent } from './signaturen.component';

describe('SignaturenComponent', () => {
  let component: SignaturenComponent;
  let fixture: ComponentFixture<SignaturenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignaturenComponent]
    });
    fixture = TestBed.createComponent(SignaturenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
