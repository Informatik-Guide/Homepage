import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreitensucheComponent } from './breitensuche.component';

describe('BreitensucheComponent', () => {
  let component: BreitensucheComponent;
  let fixture: ComponentFixture<BreitensucheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreitensucheComponent]
    });
    fixture = TestBed.createComponent(BreitensucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
