import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektorientiertesDatenmodellComponent } from './objektorientiertes-datenmodell.component';

describe('ObjektorientiertesDatenmodellComponent', () => {
  let component: ObjektorientiertesDatenmodellComponent;
  let fixture: ComponentFixture<ObjektorientiertesDatenmodellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjektorientiertesDatenmodellComponent]
    });
    fixture = TestBed.createComponent(ObjektorientiertesDatenmodellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
