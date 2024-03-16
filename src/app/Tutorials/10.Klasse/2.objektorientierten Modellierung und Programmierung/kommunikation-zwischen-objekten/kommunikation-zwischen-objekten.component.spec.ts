import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KommunikationZwischenObjektenComponent } from './kommunikation-zwischen-objekten.component';

describe('KommunikationZwischenObjektenComponent', () => {
  let component: KommunikationZwischenObjektenComponent;
  let fixture: ComponentFixture<KommunikationZwischenObjektenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KommunikationZwischenObjektenComponent]
    });
    fixture = TestBed.createComponent(KommunikationZwischenObjektenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
