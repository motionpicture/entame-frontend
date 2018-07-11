import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-payment-account',
    templateUrl: './coin-payment-account.component.html',
    styleUrls: ['./coin-payment-account.component.scss']
})
export class CoinPaymentAccountComponent implements OnInit {

    public isLoading: boolean;

    constructor() { }

    public ngOnInit() {
    }

}
