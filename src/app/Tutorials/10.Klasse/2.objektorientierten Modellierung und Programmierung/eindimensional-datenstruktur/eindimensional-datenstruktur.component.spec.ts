import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EindimensionalDatenstrukturComponent } from './eindimensional-datenstruktur.component';

describe('EindimensionalDatenstrukturComponent', () => {
  let component: EindimensionalDatenstrukturComponent;
  let fixture: ComponentFixture<EindimensionalDatenstrukturComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EindimensionalDatenstrukturComponent]
    });
    fixture = TestBed.createComponent(EindimensionalDatenstrukturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
