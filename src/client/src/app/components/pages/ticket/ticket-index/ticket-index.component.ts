import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ticket-index',
    templateUrl: './ticket-index.component.html',
    styleUrls: ['./ticket-index.component.scss']
})
export class TicketIndexComponent implements OnInit {
    public isLoading: boolean;
    constructor() { }

    public ngOnInit() {
    }

}
