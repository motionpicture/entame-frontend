import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCardTransferInputComponent } from './point-card-transfer-input.component';

describe('PointCardTransferInputComponent', () => {
  let component: PointCardTransferInputComponent;
  let fixture: ComponentFixture<PointCardTransferInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointCardTransferInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointCardTransferInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
