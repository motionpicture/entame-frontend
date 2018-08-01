import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'app-point-card-header',
    templateUrl: './point-card-header.component.html',
    styleUrls: ['./point-card-header.component.scss']
})
export class PointCardHeaderComponent implements OnInit {

    public point: number;
    constructor(
        private user: UserService
    ) { }

    public ngOnInit() {
        this.point = this.user.data.pointAccounts[0].availableBalance;
    }
}
