import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPaymentSelectComponent } from './coin-payment-select.component';

describe('CoinPaymentSelectComponent', () => {
  let component: CoinPaymentSelectComponent;
  let fixture: ComponentFixture<CoinPaymentSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPaymentSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPaymentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
