import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiImEinsatzComponent } from './ki-im-einsatz.component';

describe('KiImEinsatzComponent', () => {
  let component: KiImEinsatzComponent;
  let fixture: ComponentFixture<KiImEinsatzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KiImEinsatzComponent]
    });
    fixture = TestBed.createComponent(KiImEinsatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
