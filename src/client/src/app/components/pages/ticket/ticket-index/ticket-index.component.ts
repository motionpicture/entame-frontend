import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-ticket-index',
    templateUrl: './ticket-index.component.html',
    styleUrls: ['./ticket-index.component.scss']
})
export class TicketIndexComponent implements OnInit {
    public isLoading: boolean;
    public environment: typeof environment;
    constructor() { }

    public ngOnInit() {
        this.environment = environment;

    }

}
