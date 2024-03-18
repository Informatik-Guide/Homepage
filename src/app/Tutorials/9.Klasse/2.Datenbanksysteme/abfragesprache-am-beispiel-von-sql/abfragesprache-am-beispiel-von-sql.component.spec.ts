import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbfragespracheAmBeispielVonSQLComponent } from './abfragesprache-am-beispiel-von-sql.component';

describe('AbfragespracheAmBeispielVonSQLComponent', () => {
  let component: AbfragespracheAmBeispielVonSQLComponent;
  let fixture: ComponentFixture<AbfragespracheAmBeispielVonSQLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbfragespracheAmBeispielVonSQLComponent]
    });
    fixture = TestBed.createComponent(AbfragespracheAmBeispielVonSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
