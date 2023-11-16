import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTutorialComponent } from './first-tutorial.component';

describe('FirstTutorialComponent', () => {
  let component: FirstTutorialComponent;
  let fixture: ComponentFixture<FirstTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTutorialComponent]
    });
    fixture = TestBed.createComponent(FirstTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
