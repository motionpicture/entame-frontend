import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntamecoinService } from '../../../services/entamecoin/entamecoin.service';

@Component({
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
    @Input() public isOpen: boolean;
    @Output() public close: EventEmitter<{}> = new EventEmitter();
    constructor(
        private entamecoin: EntamecoinService
    ) { }

    public ngOnInit() {
    }

    public async signOut() {
        this.close.emit();
        await this.entamecoin.signOut();
    }

}
