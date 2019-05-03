import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNavPage } from './dynamic-nav.page';

describe('DynamicNavPage', () => {
  let component: DynamicNavPage;
  let fixture: ComponentFixture<DynamicNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicNavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
