import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coin-payment-select',
    templateUrl: './coin-payment-select.component.html',
    styleUrls: ['./coin-payment-select.component.scss']
})
export class CoinPaymentSelectComponent implements OnInit {

    public isLoading: boolean;

    constructor() { }

    public ngOnInit() {
    }

}
