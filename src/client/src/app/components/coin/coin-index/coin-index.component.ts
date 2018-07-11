import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-coin-index',
    templateUrl: './coin-index.component.html',
    styleUrls: ['./coin-index.component.scss']
})
export class CoinIndexComponent implements OnInit {

    public isLoading: boolean;

    constructor() { }

    public ngOnInit() {
    }

}
