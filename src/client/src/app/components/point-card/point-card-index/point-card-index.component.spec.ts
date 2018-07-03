import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCardIndexComponent } from './point-card-index.component';

describe('PointCardIndexComponent', () => {
  let component: PointCardIndexComponent;
  let fixture: ComponentFixture<PointCardIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointCardIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointCardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
