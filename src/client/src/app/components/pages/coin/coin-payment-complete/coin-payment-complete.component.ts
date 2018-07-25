import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinService } from '../../../../services/coin/coin.service';

@Component({
    selector: 'app-coin-payment-complete',
    templateUrl: './coin-payment-complete.component.html',
    styleUrls: ['./coin-payment-complete.component.scss']
})
export class CoinPaymentCompleteComponent implements OnInit {

    public isLoading: boolean;
    public amount: number;

    constructor(
        private router: Router,
        private coin: CoinService
    ) { }

    public async ngOnInit() {
        if (this.coin.data.amount === 0) {
            this.router.navigate(['/error']);
            return;
        }
        this.amount = this.coin.data.amount;
    }

}
