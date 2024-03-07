import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodierungComponent } from './codierung.component';

describe('CodierungComponent', () => {
  let component: CodierungComponent;
  let fixture: ComponentFixture<CodierungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodierungComponent]
    });
    fixture = TestBed.createComponent(CodierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
