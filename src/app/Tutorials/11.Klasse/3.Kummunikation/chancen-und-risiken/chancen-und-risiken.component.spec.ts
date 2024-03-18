import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChancenUndRisikenComponent } from './chancen-und-risiken.component';

describe('ChancenUndRisikenComponent', () => {
  let component: ChancenUndRisikenComponent;
  let fixture: ComponentFixture<ChancenUndRisikenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChancenUndRisikenComponent]
    });
    fixture = TestBed.createComponent(ChancenUndRisikenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
