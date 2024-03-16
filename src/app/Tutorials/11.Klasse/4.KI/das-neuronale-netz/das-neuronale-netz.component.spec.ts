import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasNeuronaleNetzComponent } from './das-neuronale-netz.component';

describe('DasNeuronaleNetzComponent', () => {
  let component: DasNeuronaleNetzComponent;
  let fixture: ComponentFixture<DasNeuronaleNetzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasNeuronaleNetzComponent]
    });
    fixture = TestBed.createComponent(DasNeuronaleNetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
