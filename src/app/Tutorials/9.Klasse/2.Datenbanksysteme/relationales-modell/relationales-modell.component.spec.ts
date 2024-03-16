import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalesModellComponent } from './relationales-modell.component';

describe('RelationalesModellComponent', () => {
  let component: RelationalesModellComponent;
  let fixture: ComponentFixture<RelationalesModellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelationalesModellComponent]
    });
    fixture = TestBed.createComponent(RelationalesModellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
