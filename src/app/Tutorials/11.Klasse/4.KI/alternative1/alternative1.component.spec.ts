import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alternative1Component } from './alternative1.component';

describe('Alternative1Component', () => {
  let component: Alternative1Component;
  let fixture: ComponentFixture<Alternative1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alternative1Component]
    });
    fixture = TestBed.createComponent(Alternative1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
