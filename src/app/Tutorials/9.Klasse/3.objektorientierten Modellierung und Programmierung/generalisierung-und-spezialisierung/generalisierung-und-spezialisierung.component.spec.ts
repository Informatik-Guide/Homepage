import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralisierungUndSpezialisierungComponent } from './generalisierung-und-spezialisierung.component';

describe('GeneralisierungUndSpezialisierungComponent', () => {
  let component: GeneralisierungUndSpezialisierungComponent;
  let fixture: ComponentFixture<GeneralisierungUndSpezialisierungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralisierungUndSpezialisierungComponent]
    });
    fixture = TestBed.createComponent(GeneralisierungUndSpezialisierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
