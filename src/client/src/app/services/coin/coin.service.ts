import { Injectable } from '@angular/core';
import { factory } from '@mocoin/api-javascript-client';
import * as moment from 'moment';
import { MocoinService } from '../mocoin/mocoin.service';
import { SaveType, StorageService } from '../storage/storage.service';

export interface IData {
    transaction?: factory.transaction.ITokenizedTransaction;
    amount: number;
}

const STORAGE_KEY = 'coin';

@Injectable({
    providedIn: 'root'
})
export class CoinService {

    public data: IData;

    constructor(
        private storage: StorageService,
        private mocoin: MocoinService
    ) {
        this.load();
        this.save();
    }

    /**
     * 読み込み
     * @method load
     */
    public load() {
        const data: IData | null = this.storage.load(STORAGE_KEY, SaveType.Session);
        if (data === null) {
            this.data = {
                amount: 0
            };

            return;
        }
        this.data = data;
    }

    /**
     * 保存
     * @method save
     */
    public save() {
        this.storage.save(STORAGE_KEY, this.data, SaveType.Session);
    }

    /**
     * リセット
     * @method reset
     */
    public reset() {
        this.data = {
            amount: 0
        };
        this.save();
    }

    /**
     * 銀行から入金
     * @param paymentMethod
     */
    public async buyCoin(args: {
        amount: number,
        userName: string,
        coinAccount: factory.pecorino.account.IAccount,
        paymentMethod: factory.ownershipInfo.IPaymentMethod<factory.paymentMethodType>
    }) {
        await this.mocoin.getServices();
        this.reset();
        this.data.transaction = await this.mocoin.transaction.buyCoin.start({
            expires: moment().add(30, 'minutes').toDate(),
            agent: {
                typeOf: factory.personType.Person,
                name: 'agent name'
            },
            recipient: {
                typeOf: factory.personType.Person,
                name: args.userName
            },
            amount: args.amount,
            notes: '入金',
            fromLocation: args.paymentMethod,
            toLocation: {
                typeOf: factory.ownershipInfo.AccountGoodType.CoinAccount,
                accountNumber: args.coinAccount.accountNumber
            }
        });
        console.log('取引を開始しました。', this.data.transaction);

        // 取引を中止する場合はコチラ↓
        // console.log('取引を中止します...');
        // await this.mocoin.transaction.transferCoin.cancel({ transactionId: transaction.id });
        // console.log('取引を中止しました。');

        await this.mocoin.transaction.buyCoin.confirm({
            token: this.data.transaction.token
        });
        this.data.amount = args.amount;
        this.save();
    }

    public async searchCoinAccountMoneyTransferActions(args: {
        coinAccount: factory.pecorino.account.IAccount
    }) {
        await this.mocoin.getServices();
        const coinAccountMoneyTransferActions =
            await this.mocoin.person.searchCoinAccountMoneyTransferActions({
                personId: 'me',
                accountNumber: args.coinAccount.accountNumber
            });

        return coinAccountMoneyTransferActions;
    }
}
