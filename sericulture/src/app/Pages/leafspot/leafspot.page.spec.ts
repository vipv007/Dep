import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeafspotPage } from './leafspot.page';

describe('LeafspotPage', () => {
  let component: LeafspotPage;
  let fixture: ComponentFixture<LeafspotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeafspotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
