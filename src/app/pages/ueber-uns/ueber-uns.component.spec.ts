import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberUnsComponent } from './ueber-uns.component';

describe('UeberUnsComponent', () => {
  let component: UeberUnsComponent;
  let fixture: ComponentFixture<UeberUnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UeberUnsComponent]
    });
    fixture = TestBed.createComponent(UeberUnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
