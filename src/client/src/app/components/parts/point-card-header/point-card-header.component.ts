import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-point-card-header',
    templateUrl: './point-card-header.component.html',
    styleUrls: ['./point-card-header.component.scss']
})
export class PointCardHeaderComponent implements OnInit {

    public point: number;
    constructor(
    ) { }

    public ngOnInit() {
        this.point = 0;
    }
}
