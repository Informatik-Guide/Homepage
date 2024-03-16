import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmenComponent } from './algorithmen.component';

describe('AlgorithmenComponent', () => {
  let component: AlgorithmenComponent;
  let fixture: ComponentFixture<AlgorithmenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlgorithmenComponent]
    });
    fixture = TestBed.createComponent(AlgorithmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
