import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() public title: string;
    @Input() public message: string;
    constructor(
        public activeModal: NgbActiveModal
    ) {}

    public ngOnInit() {
    }

}