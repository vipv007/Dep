import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MulberrySaplingsPage } from './mulberry-saplings.page';

describe('MulberrySaplingsPage', () => {
  let component: MulberrySaplingsPage;
  let fixture: ComponentFixture<MulberrySaplingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MulberrySaplingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
