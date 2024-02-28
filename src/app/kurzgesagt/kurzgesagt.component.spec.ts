import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurzgesagtComponent } from './kurzgesagt.component';

describe('KurzgesagtComponent', () => {
  let component: KurzgesagtComponent;
  let fixture: ComponentFixture<KurzgesagtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurzgesagtComponent]
    });
    fixture = TestBed.createComponent(KurzgesagtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
