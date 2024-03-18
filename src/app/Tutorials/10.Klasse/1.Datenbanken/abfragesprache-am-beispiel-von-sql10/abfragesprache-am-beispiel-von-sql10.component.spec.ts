import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbfragespracheAmBeispielVonSql10Component } from './abfragesprache-am-beispiel-von-sql10.component';

describe('AbfragespracheAmBeispielVonSql10Component', () => {
  let component: AbfragespracheAmBeispielVonSql10Component;
  let fixture: ComponentFixture<AbfragespracheAmBeispielVonSql10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbfragespracheAmBeispielVonSql10Component]
    });
    fixture = TestBed.createComponent(AbfragespracheAmBeispielVonSql10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
