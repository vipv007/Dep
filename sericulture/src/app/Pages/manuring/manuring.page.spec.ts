import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManuringPage } from './manuring.page';

describe('ManuringPage', () => {
  let component: ManuringPage;
  let fixture: ComponentFixture<ManuringPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManuringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
