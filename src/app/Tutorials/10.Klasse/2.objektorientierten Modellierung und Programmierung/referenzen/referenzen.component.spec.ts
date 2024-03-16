import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenzenComponent } from './referenzen.component';

describe('ReferenzenComponent', () => {
  let component: ReferenzenComponent;
  let fixture: ComponentFixture<ReferenzenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenzenComponent]
    });
    fixture = TestBed.createComponent(ReferenzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
