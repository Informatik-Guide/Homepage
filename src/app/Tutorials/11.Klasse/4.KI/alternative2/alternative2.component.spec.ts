import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alternative2Component } from './alternative2.component';

describe('Alternative2Component', () => {
  let component: Alternative2Component;
  let fixture: ComponentFixture<Alternative2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alternative2Component]
    });
    fixture = TestBed.createComponent(Alternative2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
