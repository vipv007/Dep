import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisinfectionPage } from './disinfection.page';

describe('DisinfectionPage', () => {
  let component: DisinfectionPage;
  let fixture: ComponentFixture<DisinfectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisinfectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
