import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SilkwormsPage } from './silkworms.page';

describe('SilkwormsPage', () => {
  let component: SilkwormsPage;
  let fixture: ComponentFixture<SilkwormsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SilkwormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
