import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-coin-header',
    templateUrl: './coin-header.component.html',
    styleUrls: ['./coin-header.component.scss']
})
export class CoinHeaderComponent implements OnInit {

    public coin: number;
    constructor(
        private user: UserService
    ) { }

    public ngOnInit() {
        this.coin = this.user.data.coinAccounts[0].availableBalance;
    }

}
