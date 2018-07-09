import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinHeaderComponent } from './coin-header.component';

describe('CoinHeaderComponent', () => {
  let component: CoinHeaderComponent;
  let fixture: ComponentFixture<CoinHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
