import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellenkalkulationsprogrammComponent } from './tabellenkalkulationsprogramm.component';

describe('TabellenkalkulationsprogrammComponent', () => {
  let component: TabellenkalkulationsprogrammComponent;
  let fixture: ComponentFixture<TabellenkalkulationsprogrammComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabellenkalkulationsprogrammComponent]
    });
    fixture = TestBed.createComponent(TabellenkalkulationsprogrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
