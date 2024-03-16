import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjazenzmatrixComponent } from './adjazenzmatrix.component';

describe('AdjazenzmatrixComponent', () => {
  let component: AdjazenzmatrixComponent;
  let fixture: ComponentFixture<AdjazenzmatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdjazenzmatrixComponent]
    });
    fixture = TestBed.createComponent(AdjazenzmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
