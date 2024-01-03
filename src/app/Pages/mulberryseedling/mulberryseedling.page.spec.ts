import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MulberryseedlingPage } from './mulberryseedling.page';

describe('MulberryseedlingPage', () => {
  let component: MulberryseedlingPage;
  let fixture: ComponentFixture<MulberryseedlingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MulberryseedlingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
