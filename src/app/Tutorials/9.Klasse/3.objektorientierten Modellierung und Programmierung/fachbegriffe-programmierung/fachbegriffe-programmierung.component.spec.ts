import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FachbegriffeProgrammierungComponent } from './fachbegriffe-programmierung.component';

describe('FachbegriffeProgrammierungComponent', () => {
  let component: FachbegriffeProgrammierungComponent;
  let fixture: ComponentFixture<FachbegriffeProgrammierungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FachbegriffeProgrammierungComponent]
    });
    fixture = TestBed.createComponent(FachbegriffeProgrammierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
