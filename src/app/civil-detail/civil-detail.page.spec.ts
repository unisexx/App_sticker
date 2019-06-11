import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilDetailPage } from './civil-detail.page';

describe('CivilDetailPage', () => {
  let component: CivilDetailPage;
  let fixture: ComponentFixture<CivilDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
