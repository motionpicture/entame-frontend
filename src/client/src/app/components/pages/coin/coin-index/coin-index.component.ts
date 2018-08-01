import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@mocoin/api-javascript-client';
import { CoinService } from '../../../../services/coin/coin.service';
import { UserService } from '../../../../services/user/user.service';

@Component({
    selector: 'app-coin-index',
    templateUrl: './coin-index.component.html',
    styleUrls: ['./coin-index.component.scss']
})
export class CoinIndexComponent implements OnInit {

    public isLoading: boolean;
    public transactionType: typeof factory.transactionType;
    public coinAccountMoneyTransferActions: factory.action.transfer.moneyTransfer.IAction;

    constructor(
        private router: Router,
        private user: UserService,
        private coin: CoinService
    ) { }

    public async ngOnInit() {
        this.isLoading = true;
        this.transactionType = factory.transactionType;
        try {
            this.coinAccountMoneyTransferActions =
                await this.coin.searchCoinAccountMoneyTransferActions({
                    coinAccount: this.user.data.coinAccounts[0]
                });
            console.log(this.coinAccountMoneyTransferActions);
        } catch (err) {
            console.error(err);
            this.router.navigate(['/error']);
        }
        this.isLoading = false;

    }

}
