import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPaymentInputComponent } from './coin-payment-input.component';

describe('CoinPaymentInputComponent', () => {
  let component: CoinPaymentInputComponent;
  let fixture: ComponentFixture<CoinPaymentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPaymentInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPaymentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
