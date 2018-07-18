import { Component, OnInit } from '@angular/core';
import { MocoinService } from '../../../../services/mocoin/mocoin.service';

@Component({
    selector: 'app-auth-index',
    templateUrl: './auth-index.component.html',
    styleUrls: ['./auth-index.component.scss']
})
export class AuthIndexComponent implements OnInit {

    public isLoading: boolean;

    constructor(
        private mocoin: MocoinService
    ) { }

    public ngOnInit() {
    }

    public async signIn() {
        this.isLoading = true;
        try {
            await this.mocoin.signIn();
        } catch (error) {
            console.error(error);
            this.isLoading = false;
        }
    }

    public async signUp() {
        this.isLoading = true;
        try {
            await this.mocoin.signUp();
        } catch (error) {
            console.error(error);
            this.isLoading = false;
        }
    }
}
