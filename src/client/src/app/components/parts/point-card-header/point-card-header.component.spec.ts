import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCardHeaderComponent } from './point-card-header.component';

describe('PointCardHeaderComponent', () => {
  let component: PointCardHeaderComponent;
  let fixture: ComponentFixture<PointCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
