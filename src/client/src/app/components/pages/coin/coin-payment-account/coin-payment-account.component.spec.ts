import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCoinPaymentAccountComponent } from './coin-payment-account.component';

describe('CoinPaymentAccountComponent', () => {
  let component: CoinPaymentAccountComponent;
  let fixture: ComponentFixture<CoinPaymentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPaymentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPaymentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
