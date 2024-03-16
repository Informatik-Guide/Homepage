import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationalesDatenbanksystemComponent } from './relationales-datenbanksystem.component';

describe('RelationalesDatenbanksystemComponent', () => {
  let component: RelationalesDatenbanksystemComponent;
  let fixture: ComponentFixture<RelationalesDatenbanksystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelationalesDatenbanksystemComponent]
    });
    fixture = TestBed.createComponent(RelationalesDatenbanksystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
