import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunktionenComponent } from './funktionen.component';

describe('FunktionenComponent', () => {
  let component: FunktionenComponent;
  let fixture: ComponentFixture<FunktionenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunktionenComponent]
    });
    fixture = TestBed.createComponent(FunktionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
