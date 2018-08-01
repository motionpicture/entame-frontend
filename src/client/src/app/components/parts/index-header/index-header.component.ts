import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-index-header',
    templateUrl: './index-header.component.html',
    styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent implements OnInit {
    public coin: number;
    public point: number;
    constructor(
        private user: UserService
    ) { }

    public ngOnInit() {
        this.coin = this.user.data.coinAccounts[0].availableBalance;
        this.point = this.user.data.pointAccounts[0].availableBalance;
    }

}
