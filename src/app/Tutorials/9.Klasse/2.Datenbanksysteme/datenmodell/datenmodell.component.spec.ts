import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenmodellComponent } from './datenmodell.component';

describe('DatenmodellComponent', () => {
  let component: DatenmodellComponent;
  let fixture: ComponentFixture<DatenmodellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatenmodellComponent]
    });
    fixture = TestBed.createComponent(DatenmodellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
