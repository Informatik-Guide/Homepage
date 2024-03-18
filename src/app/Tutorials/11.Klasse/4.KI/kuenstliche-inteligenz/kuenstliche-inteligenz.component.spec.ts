import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuenstlicheInteligenzComponent } from './kuenstliche-inteligenz.component';

describe('KuenstlicheInteligenzComponent', () => {
  let component: KuenstlicheInteligenzComponent;
  let fixture: ComponentFixture<KuenstlicheInteligenzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KuenstlicheInteligenzComponent]
    });
    fixture = TestBed.createComponent(KuenstlicheInteligenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
