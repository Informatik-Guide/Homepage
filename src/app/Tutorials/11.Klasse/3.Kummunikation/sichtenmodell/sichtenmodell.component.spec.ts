import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SichtenmodellComponent } from './sichtenmodell.component';

describe('SichtenmodellComponent', () => {
  let component: SichtenmodellComponent;
  let fixture: ComponentFixture<SichtenmodellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SichtenmodellComponent]
    });
    fixture = TestBed.createComponent(SichtenmodellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
