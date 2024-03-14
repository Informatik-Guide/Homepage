import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellenkalkComponent } from './tabellenkalk.component';

describe('TabellenkalkComponent', () => {
  let component: TabellenkalkComponent;
  let fixture: ComponentFixture<TabellenkalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabellenkalkComponent]
    });
    fixture = TestBed.createComponent(TabellenkalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
