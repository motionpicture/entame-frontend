import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { factory } from '@mocoin/api-javascript-client';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoinService } from '../../../../services/coin/coin.service';
import { UserService } from '../../../../services/user/user.service';
import { ModalComponent } from '../../../parts/modal/modal.component';

@Component({
    selector: 'app-payment-account',
    templateUrl: './coin-payment-account.component.html',
    styleUrls: ['./coin-payment-account.component.scss']
})
export class CoinPaymentAccountComponent implements OnInit {

    public isLoading: boolean;
    public paymentMethods: factory.ownershipInfo.IPaymentMethod<factory.paymentMethodType>[];
    public selectPaymentMethod: factory.ownershipInfo.IPaymentMethod<factory.paymentMethodType>;
    public form: FormGroup;
    public disable: boolean;

    constructor(
        private user: UserService,
        private coin: CoinService,
        private router: Router,
        private modalService: NgbModal
    ) { }

    public async ngOnInit() {
        this.form = this.createForm();
        this.disable = false;
        // 決済方法取得
        this.paymentMethods = this.user.data.paymentMethods.filter((paymentMethod) => {
            return (paymentMethod.paymentMethodType === factory.paymentMethodType.BankAccount);
        });
        // 選択中決済方法
        this.selectPaymentMethod = this.paymentMethods[0];
    }

    /**
     * フォーム作成
     */
    public createForm() {
        return new FormGroup({
            amount: new FormControl(0, [
                Validators.required,
                Validators.pattern(/^[0-9]+$/)
            ])
        });
    }

    /**
     * 入金
     */
    public async onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        const amount: number = this.form.controls.amount.value;
        try {
            // 入金処理
            await this.coin.transferCoinFromBank({
                amount: amount,
                userName: this.user.data.userName,
                coinAccount: this.user.data.coinAccounts[0],
                paymentMethod: this.selectPaymentMethod
            });
            // ユーザー情報更新
            this.user.data.coinAccounts[0].availableBalance += amount;
            this.user.data.coinAccounts[0].balance += amount;
            this.user.save();
            this.router.navigate(['/coin/payment/complete']);
        } catch (err) {
            console.error(err);
            this.openModal({
                title: 'エラーが発生しました',
                message: err.message
            });
        }
        this.isLoading = false;
    }

    public openModal(args: {
        title: string,
        message: string
    }) {
        const modalRef = this.modalService.open(ModalComponent, { centered: true });
        modalRef.componentInstance.title = args.title;
        modalRef.componentInstance.message = args.message;
    }

}
