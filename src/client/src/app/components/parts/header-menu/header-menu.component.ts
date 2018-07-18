import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MocoinService } from '../../../services/mocoin/mocoin.service';

@Component({
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
    @Input() public isOpen: boolean;
    @Output() public close: EventEmitter<{}> = new EventEmitter();
    constructor(
        private mocoin: MocoinService
    ) { }

    public ngOnInit() {
    }

    public async signOut() {
        this.close.emit();
        await this.mocoin.signOut();
    }

}
