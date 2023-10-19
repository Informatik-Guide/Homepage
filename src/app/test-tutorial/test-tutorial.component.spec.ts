import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTutorialComponent } from './test-tutorial.component';

describe('TestTutorialComponent', () => {
  let component: TestTutorialComponent;
  let fixture: ComponentFixture<TestTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTutorialComponent]
    });
    fixture = TestBed.createComponent(TestTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
