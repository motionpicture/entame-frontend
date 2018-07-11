import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth-index',
    templateUrl: './auth-index.component.html',
    styleUrls: ['./auth-index.component.scss']
})
export class AuthIndexComponent implements OnInit {

    public isLoading: boolean;

    constructor() { }

    public ngOnInit() {
    }
}
