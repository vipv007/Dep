import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MulberryPage } from './mulberry.page';

describe('MulberryPage', () => {
  let component: MulberryPage;
  let fixture: ComponentFixture<MulberryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MulberryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
