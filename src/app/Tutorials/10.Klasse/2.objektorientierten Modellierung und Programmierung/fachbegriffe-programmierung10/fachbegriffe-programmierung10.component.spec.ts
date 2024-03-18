import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FachbegriffeProgrammierung10Component } from './fachbegriffe-programmierung10.component';

describe('FachbegriffeProgrammierung10Component', () => {
  let component: FachbegriffeProgrammierung10Component;
  let fixture: ComponentFixture<FachbegriffeProgrammierung10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FachbegriffeProgrammierung10Component]
    });
    fixture = TestBed.createComponent(FachbegriffeProgrammierung10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
