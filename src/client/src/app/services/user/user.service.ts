import { Injectable } from '@angular/core';
import { factory } from '@mocoin/api-javascript-client';
import { environment } from '../../../environments/environment';
import { MocoinService, REQUEST_HEADERS } from '../mocoin/mocoin.service';
import { SaveType, StorageService } from '../storage/storage.service';

export interface IData {
    userName: string;
    coinAccounts: factory.pecorino.account.IAccount<factory.accountType.Coin>[];
    pointAccounts: factory.pecorino.account.IAccount<factory.accountType.Point>[];
    paymentMethods: factory.ownershipInfo.IPaymentMethod<factory.paymentMethodType>[];
}

const STORAGE_KEY = 'user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

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
        const data: IData | null = this.storage.load(STORAGE_KEY, SaveType.Local);
        if (data === null) {
            this.data = {
                userName: '',
                coinAccounts: [],
                pointAccounts: [],
                paymentMethods: []
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
        this.storage.save(STORAGE_KEY, this.data, SaveType.Local);
    }

    /**
     * リセット
     * @method reset
     */
    public reset() {
        this.data = {
            userName: '',
            coinAccounts: [],
            pointAccounts: [],
            paymentMethods: []
        };
        this.save();
    }

    /**
     * 会員初期化
     * @method init
     */
    public async init() {
        this.reset();
        await this.mocoin.getServices();
        if (this.mocoin.userName === undefined) {
            throw new Error('userName is undefined');
        }

        // ユーザーネーム取得
        this.data.userName = this.mocoin.userName;

        // コイン口座取得
        const coinAccounts = await this.mocoin.person.searchCoinAccounts(
            { personId: 'me', },
            <any>{
                headers: REQUEST_HEADERS
            }
        );
        this.data.coinAccounts = coinAccounts.filter((account) => {
            return (account.status === factory.pecorino.accountStatusType.Opened);
        });
        if (this.data.coinAccounts.length === 0) {
            const coinAccount = await this.mocoin.person.openCoinAccount(
                { personId: 'me', name: this.data.userName },
                <any>{
                    headers: REQUEST_HEADERS
                }
            );
            this.data.coinAccounts.push(coinAccount);
        }

        // ポイント口座取得
        const pointAccounts = await this.mocoin.person.searchPointAccounts(
            { personId: 'me' },
            <any>{
                headers: REQUEST_HEADERS
            }
        );
        this.data.pointAccounts = pointAccounts.filter((account) => {
            return (account.status === factory.pecorino.accountStatusType.Opened);
        });
        if (this.data.pointAccounts.length === 0) {
            const pointAccount = await this.mocoin.person.openPointAccount(
                { personId: 'me', name: this.data.userName },
                <any>{
                    headers: REQUEST_HEADERS
                }
            );
            this.data.pointAccounts.push(pointAccount);
        }

        // 決済方法取得
        this.data.paymentMethods = await this.mocoin.person.searchPaymentMethods({
            personId: 'me'
        });
        let tmpPaymentMethod = this.data.paymentMethods.find((paymentMethod) => {
            return (paymentMethod.accountNumber === environment.TMP_BANK_ACCOUNT_NUMBER);
        });
        if (tmpPaymentMethod === undefined) {
            tmpPaymentMethod = await this.mocoin.person.addPaymentMethod(
                {
                    personId: 'me',
                    accountNumber: environment.TMP_BANK_ACCOUNT_NUMBER,
                    paymentMethodType: factory.paymentMethodType.BankAccount
                },
                <any>{
                    headers: REQUEST_HEADERS
                }
            );
            this.data.paymentMethods.push(tmpPaymentMethod);
        }

        // await this.mocoin.person.closeCoinAccount({
        //     personId: 'me',
        //     accountNumber: this.data.coinAccounts[0].accountNumber
        // });

        this.save();
    }

    public async update() {
        await this.mocoin.getServices();
        if (this.mocoin.userName === undefined) {
            throw new Error('userName is undefined');
        }

        // ユーザーネーム取得
        this.data.userName = this.mocoin.userName;
        // コイン口座取得
        const coinAccounts = await this.mocoin.person.searchCoinAccounts(
            { personId: 'me' },
            <any>{
                headers: REQUEST_HEADERS
            }
        );
        this.data.coinAccounts = coinAccounts.filter((account) => {
            return (account.status === factory.pecorino.accountStatusType.Opened);
        });

        // ポイント口座取得
        const pointAccounts = await this.mocoin.person.searchPointAccounts(
            { personId: 'me' },
            <any>{
                headers: REQUEST_HEADERS
            }
        );
        this.data.pointAccounts = pointAccounts.filter((account) => {
            return (account.status === factory.pecorino.accountStatusType.Opened);
        });

        this.save();
    }

}
