import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IrrigationPage } from './irrigation.page';

describe('IrrigationPage', () => {
  let component: IrrigationPage;
  let fixture: ComponentFixture<IrrigationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IrrigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
