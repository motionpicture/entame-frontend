import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-index-header',
    templateUrl: './index-header.component.html',
    styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent implements OnInit {
    @Input() public coin: number;
    @Input() public point: number;
    constructor() { }

    public ngOnInit() {}

}
