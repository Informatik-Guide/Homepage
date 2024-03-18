import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FachbegriffeDatenbanksysteme10Component } from './fachbegriffe-datenbanksysteme10.component';

describe('FachbegriffeDatenbanksysteme10Component', () => {
  let component: FachbegriffeDatenbanksysteme10Component;
  let fixture: ComponentFixture<FachbegriffeDatenbanksysteme10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FachbegriffeDatenbanksysteme10Component]
    });
    fixture = TestBed.createComponent(FachbegriffeDatenbanksysteme10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
