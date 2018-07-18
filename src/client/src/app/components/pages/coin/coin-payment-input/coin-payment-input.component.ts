import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coin-payment-input',
    templateUrl: './coin-payment-input.component.html',
    styleUrls: ['./coin-payment-input.component.scss']
})
export class CoinPaymentInputComponent implements OnInit {

    public isLoading: boolean;

    constructor() { }

    public ngOnInit() {
    }

}
