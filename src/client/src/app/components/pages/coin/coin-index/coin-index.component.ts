import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@mocoin/api-javascript-client';
import { MocoinService } from '../../../../services/mocoin/mocoin.service';
import { UserService } from '../../../../services/user/user.service';

@Component({
    selector: 'app-coin-index',
    templateUrl: './coin-index.component.html',
    styleUrls: ['./coin-index.component.scss']
})
export class CoinIndexComponent implements OnInit {

    public isLoading: boolean;
    public coinAccountMoneyTransferActions: factory.pecorino.action.transfer.moneyTransfer.IAction[];

    constructor(
        private router: Router,
        private user: UserService,
        private mocoin: MocoinService
    ) { }

    public async ngOnInit() {
        this.isLoading = true;
        try {
            await this.mocoin.getServices();
            this.coinAccountMoneyTransferActions =
                await this.mocoin.person.searchCoinAccountMoneyTransferActions({
                    personId: 'me',
                    accountNumber: this.user.data.coinAccounts[0].accountNumber
                });
            this.isLoading = false;
            console.log(this.coinAccountMoneyTransferActions);
        } catch (err) {
            console.error(err);
            this.router.navigate(['/error']);
        }

    }

}
