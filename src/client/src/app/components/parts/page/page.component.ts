import { Component, Input, OnInit } from '@angular/core';
import { fade } from '../../../animations/base';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    animations: [fade]
})
export class PageComponent implements OnInit {
    @Input() public touch?: boolean;
    public animationState: string;
    constructor() { }

    public ngOnInit() {
        if (this.touch === undefined) {
            this.touch = true;
        }
    }

}
