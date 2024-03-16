import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenflussdiagrammComponent } from './datenflussdiagramm.component';

describe('DatenflussdiagrammComponent', () => {
  let component: DatenflussdiagrammComponent;
  let fixture: ComponentFixture<DatenflussdiagrammComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatenflussdiagrammComponent]
    });
    fixture = TestBed.createComponent(DatenflussdiagrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
