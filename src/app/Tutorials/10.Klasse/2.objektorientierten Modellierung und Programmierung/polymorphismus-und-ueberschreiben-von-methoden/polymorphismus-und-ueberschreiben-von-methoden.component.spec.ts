import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismusUndUeberschreibenVonMethodenComponent } from './polymorphismus-und-ueberschreiben-von-methoden.component';

describe('PolymorphismusUndUeberschreibenVonMethodenComponent', () => {
  let component: PolymorphismusUndUeberschreibenVonMethodenComponent;
  let fixture: ComponentFixture<PolymorphismusUndUeberschreibenVonMethodenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolymorphismusUndUeberschreibenVonMethodenComponent]
    });
    fixture = TestBed.createComponent(PolymorphismusUndUeberschreibenVonMethodenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
