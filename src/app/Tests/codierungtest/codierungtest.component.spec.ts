import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodierungtestComponent } from './codierungtest.component';

describe('CodierungtestComponent', () => {
  let component: CodierungtestComponent;
  let fixture: ComponentFixture<CodierungtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodierungtestComponent]
    });
    fixture = TestBed.createComponent(CodierungtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
