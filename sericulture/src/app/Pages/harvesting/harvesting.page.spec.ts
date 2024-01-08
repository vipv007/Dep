import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarvestingPage } from './harvesting.page';

describe('HarvestingPage', () => {
  let component: HarvestingPage;
  let fixture: ComponentFixture<HarvestingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HarvestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
