import { Component, OnInit } from '@angular/core';
import { EntamecoinService } from '../../../services/entamecoin/entamecoin.service';

@Component({
    selector: 'app-auth-index',
    templateUrl: './auth-index.component.html',
    styleUrls: ['./auth-index.component.scss']
})
export class AuthIndexComponent implements OnInit {

    public isLoading: boolean;

    constructor(
        private entamecoin: EntamecoinService
    ) { }

    public ngOnInit() {
    }

    public async signIn() {
        this.isLoading = true;
        try {
            await this.entamecoin.signIn();
        } catch (error) {
            console.error(error);
            this.isLoading = false;
        }
    }

    public async signUp() {
        this.isLoading = true;
        try {
            await this.entamecoin.signUp();
        } catch (error) {
            console.error(error);
            this.isLoading = false;
        }
    }
}
