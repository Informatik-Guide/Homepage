import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbfrageComponent } from './abfrage.component';

describe('AbfrageComponent', () => {
  let component: AbfrageComponent;
  let fixture: ComponentFixture<AbfrageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbfrageComponent]
    });
    fixture = TestBed.createComponent(AbfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
