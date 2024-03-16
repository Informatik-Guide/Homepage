import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalesModell10Component } from './relationales-modell10.component';

describe('RelationalesModell10Component', () => {
  let component: RelationalesModell10Component;
  let fixture: ComponentFixture<RelationalesModell10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelationalesModell10Component]
    });
    fixture = TestBed.createComponent(RelationalesModell10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
