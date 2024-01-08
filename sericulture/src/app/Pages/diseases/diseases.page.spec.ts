import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiseasesPage } from './diseases.page';

describe('DiseasesPage', () => {
  let component: DiseasesPage;
  let fixture: ComponentFixture<DiseasesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiseasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
