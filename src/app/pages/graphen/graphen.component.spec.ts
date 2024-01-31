import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphenComponent } from './graphen.component';

describe('GraphenComponent', () => {
  let component: GraphenComponent;
  let fixture: ComponentFixture<GraphenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphenComponent]
    });
    fixture = TestBed.createComponent(GraphenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
