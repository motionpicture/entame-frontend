import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coin-payment-complete',
    templateUrl: './coin-payment-complete.component.html',
    styleUrls: ['./coin-payment-complete.component.scss']
})
export class CoinPaymentCompleteComponent implements OnInit {

    public isLoading: boolean;

    constructor() { }

    public ngOnInit() {
    }

}
