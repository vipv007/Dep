import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PowderymildewPage } from './powderymildew.page';

describe('PowderymildewPage', () => {
  let component: PowderymildewPage;
  let fixture: ComponentFixture<PowderymildewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PowderymildewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
