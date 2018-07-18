import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPaymentCompleteComponent } from './coin-payment-complete.component';

describe('CoinPaymentCompleteComponent', () => {
  let component: CoinPaymentCompleteComponent;
  let fixture: ComponentFixture<CoinPaymentCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPaymentCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPaymentCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
