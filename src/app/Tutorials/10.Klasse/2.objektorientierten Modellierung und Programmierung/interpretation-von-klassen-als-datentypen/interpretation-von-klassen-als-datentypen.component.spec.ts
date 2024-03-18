import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationVonKlassenAlsDatentypenComponent } from './interpretation-von-klassen-als-datentypen.component';

describe('InterpretationVonKlassenAlsDatentypenComponent', () => {
  let component: InterpretationVonKlassenAlsDatentypenComponent;
  let fixture: ComponentFixture<InterpretationVonKlassenAlsDatentypenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpretationVonKlassenAlsDatentypenComponent]
    });
    fixture = TestBed.createComponent(InterpretationVonKlassenAlsDatentypenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
