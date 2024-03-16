import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsaetzeComponent } from './ansaetze.component';

describe('AnsaetzeComponent', () => {
  let component: AnsaetzeComponent;
  let fixture: ComponentFixture<AnsaetzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnsaetzeComponent]
    });
    fixture = TestBed.createComponent(AnsaetzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
