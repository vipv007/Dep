import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeafrustPage } from './leafrust.page';

describe('LeafrustPage', () => {
  let component: LeafrustPage;
  let fixture: ComponentFixture<LeafrustPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeafrustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
