import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@mocoin/api-javascript-client';
import { CoinService } from '../../../../services/coin/coin.service';

@Component({
    selector: 'app-coin-payment-complete',
    templateUrl: './coin-payment-complete.component.html',
    styleUrls: ['./coin-payment-complete.component.scss']
})
export class CoinPaymentCompleteComponent implements OnInit {

    public isLoading: boolean;
    public transaction: factory.transaction.transferCoin.ITransaction;

    constructor(
        private router: Router,
        private coin: CoinService
    ) { }

    public async ngOnInit() {
        if (this.coin.data.transaction === undefined
        || this.coin.data.transaction.typeOf !== factory.transactionType.TransferCoin) {
            this.router.navigate(['/error']);
            return;
        }
        this.transaction = this.coin.data.transaction;
    }

}
