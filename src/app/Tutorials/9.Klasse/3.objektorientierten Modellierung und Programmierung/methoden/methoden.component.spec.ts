import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodenComponent } from './methoden.component';

describe('MethodenComponent', () => {
  let component: MethodenComponent;
  let fixture: ComponentFixture<MethodenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethodenComponent]
    });
    fixture = TestBed.createComponent(MethodenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
