import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTutorial2Component } from './test-tutorial2.component';

describe('TestTutorial2Component', () => {
  let component: TestTutorial2Component;
  let fixture: ComponentFixture<TestTutorial2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTutorial2Component]
    });
    fixture = TestBed.createComponent(TestTutorial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
