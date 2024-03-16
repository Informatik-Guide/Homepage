import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FachbegriffeDatenbanksystemeComponent } from './fachbegriffe-datenbanksysteme.component';

describe('FachbegriffeDatenbanksystemeComponent', () => {
  let component: FachbegriffeDatenbanksystemeComponent;
  let fixture: ComponentFixture<FachbegriffeDatenbanksystemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FachbegriffeDatenbanksystemeComponent]
    });
    fixture = TestBed.createComponent(FachbegriffeDatenbanksystemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
