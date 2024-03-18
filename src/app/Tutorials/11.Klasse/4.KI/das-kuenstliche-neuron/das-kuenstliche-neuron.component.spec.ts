import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasKuenstlicheNeuronComponent } from './das-kuenstliche-neuron.component';

describe('DasKuenstlicheNeuronComponent', () => {
  let component: DasKuenstlicheNeuronComponent;
  let fixture: ComponentFixture<DasKuenstlicheNeuronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasKuenstlicheNeuronComponent]
    });
    fixture = TestBed.createComponent(DasKuenstlicheNeuronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
