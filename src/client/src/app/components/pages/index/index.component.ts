import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    public isLoading: boolean;
    public coin: number;
    public point: number;

    constructor(
        private user: UserService,
        private router: Router
    ) { }

    public async ngOnInit() {
        this.isLoading = true;
        this.coin = 0;
        this.point = 0;
        try {
            await this.user.update();
            this.coin = this.user.data.coinAccounts[0].availableBalance;
            this.point = this.user.data.pointAccounts[0].availableBalance;
            this.isLoading = false;
        } catch (err) {
            console.error(err);
            this.router.navigate(['/error']);
        }
    }


}
