import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedundanzUndKonsistenzVonDatenbestaendenComponent } from './redundanz-und-konsistenz-von-datenbestaenden.component';

describe('RedundanzUndKonsistenzVonDatenbestaendenComponent', () => {
  let component: RedundanzUndKonsistenzVonDatenbestaendenComponent;
  let fixture: ComponentFixture<RedundanzUndKonsistenzVonDatenbestaendenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedundanzUndKonsistenzVonDatenbestaendenComponent]
    });
    fixture = TestBed.createComponent(RedundanzUndKonsistenzVonDatenbestaendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
