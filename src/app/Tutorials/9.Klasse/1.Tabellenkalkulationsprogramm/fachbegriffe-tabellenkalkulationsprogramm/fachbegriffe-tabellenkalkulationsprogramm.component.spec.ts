import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FachbegriffeTabellenkalkulationsprogrammComponent } from './fachbegriffe-tabellenkalkulationsprogramm.component';

describe('FachbegriffeTabellenkalkulationsprogrammComponent', () => {
  let component: FachbegriffeTabellenkalkulationsprogrammComponent;
  let fixture: ComponentFixture<FachbegriffeTabellenkalkulationsprogrammComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FachbegriffeTabellenkalkulationsprogrammComponent]
    });
    fixture = TestBed.createComponent(FachbegriffeTabellenkalkulationsprogrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
