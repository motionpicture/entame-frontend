import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPaymentCreditComponent } from './coin-payment-credit.component';

describe('CoinPaymentCreditComponent', () => {
  let component: CoinPaymentCreditComponent;
  let fixture: ComponentFixture<CoinPaymentCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPaymentCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPaymentCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
