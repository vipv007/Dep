import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoultPage } from './moult.page';

describe('MoultPage', () => {
  let component: MoultPage;
  let fixture: ComponentFixture<MoultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
