import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WertzuweisungZurAenderungVonVariablenwertenComponent } from './wertzuweisung-zur-aenderung-von-variablenwerten.component';

describe('WertzuweisungZurAenderungVonVariablenwertenComponent', () => {
  let component: WertzuweisungZurAenderungVonVariablenwertenComponent;
  let fixture: ComponentFixture<WertzuweisungZurAenderungVonVariablenwertenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WertzuweisungZurAenderungVonVariablenwertenComponent]
    });
    fixture = TestBed.createComponent(WertzuweisungZurAenderungVonVariablenwertenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
