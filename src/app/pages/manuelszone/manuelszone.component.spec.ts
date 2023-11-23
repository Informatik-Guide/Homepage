import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuelszoneComponent } from './manuelszone.component';

describe('ManuelszoneComponent', () => {
  let component: ManuelszoneComponent;
  let fixture: ComponentFixture<ManuelszoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManuelszoneComponent]
    });
    fixture = TestBed.createComponent(ManuelszoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
