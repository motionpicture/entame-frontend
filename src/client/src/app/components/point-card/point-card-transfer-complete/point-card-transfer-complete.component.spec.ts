import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCardTransferCompleteComponent } from './point-card-transfer-complete.component';

describe('PointCardTransferCompleteComponent', () => {
  let component: PointCardTransferCompleteComponent;
  let fixture: ComponentFixture<PointCardTransferCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointCardTransferCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointCardTransferCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
