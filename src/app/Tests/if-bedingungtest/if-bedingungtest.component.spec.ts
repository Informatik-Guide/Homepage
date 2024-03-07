import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfBedingungtestComponent } from './if-bedingungtest.component';

describe('IfBedingungtestComponent', () => {
  let component: IfBedingungtestComponent;
  let fixture: ComponentFixture<IfBedingungtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfBedingungtestComponent]
    });
    fixture = TestBed.createComponent(IfBedingungtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
