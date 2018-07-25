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

    constructor(
        private user: UserService,
        private router: Router
    ) { }

    public async ngOnInit() {
        this.isLoading = true;
        try {
            await this.user.update();
            this.isLoading = false;
        } catch (err) {
            console.error(err);
            this.router.navigate(['/error']);
        }
    }


}
