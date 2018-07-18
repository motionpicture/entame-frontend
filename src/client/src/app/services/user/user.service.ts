import { Injectable } from '@angular/core';
import { factory } from '../../../../../../node_modules/@entamecoin/api-javascript-client';
import { EntamecoinService } from '../entamecoin/entamecoin.service';
import { SaveType, StorageService } from '../storage/storage.service';


export interface IData {
    userName?: string;
    coinAccounts: factory.pecorino.account.IAccount[];
}

const STORAGE_KEY = 'user';

@Injectable()
export class UserService {

    public data: IData;

    constructor(
        private storage: StorageService,
        private entamecoin: EntamecoinService
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
                coinAccounts: []
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
            coinAccounts: []
        };
        this.save();
    }

    /**
     * 会員初期化
     * @method init
     */
    public async init() {
        this.reset();
        await this.entamecoin.getServices();
        if (this.entamecoin.userName === undefined) {
            throw new Error('userName is undefined');
        }

        this.data.userName = this.entamecoin.userName;
        const coinAccounts = await this.entamecoin.person.searchCoinAccounts({
            personId: 'me'
        });
        this.data.coinAccounts = coinAccounts.filter((account) => {
            return (account.status === factory.pecorino.accountStatusType.Opened);
        });
        if (this.data.coinAccounts.length === 0) {
            const coinAccount = await this.entamecoin.person.openCoinAccount({
                personId: 'me',
                name: this.data.userName
            });
            this.data.coinAccounts.push(coinAccount);
        }

        this.save();
    }

    // /**
    //  * 口座情報更新
    //  * @method updateAccount
    //  */
    // public async updateAccount() {
    //     await this.entamecoin.getServices();
    //     // 口座検索
    //     let accounts = await this.entamecoin.person.findAccounts({
    //         personId: 'me'
    //     });
    //     accounts = accounts.filter((account) => {
    //         return account.status === factory.pecorino.accountStatusType.Opened;
    //     });
    //     if (accounts.length === 0) {
    //         // 口座開設
    //         const account = await this.entamecoin.person.openAccount({
    //             personId: 'me',
    //             name: this.getName()
    //         });
    //         this.data.accounts.push(account);
    //     } else {
    //         this.data.accounts = accounts;
    //     }
    //     this.save();
    // }

    // /**
    //  * 名前取得
    //  * @method getName
    //  */
    // public getName() {
    //     if (this.data.contact === undefined) {
    //         return '';
    //     }
    //     return `${this.data.contact.familyName} ${this.data.contact.givenName}`;
    // }

    // /**
    //  * 電話番号取得（ハイフンなし）
    //  * @method getTelephone
    //  */
    // public getTelephone() {
    //     if (this.data.contact === undefined) {
    //         return '';
    //     }
    //     return this.data.contact.telephone.replace(/\-/g, '');
    // }

    // /**
    //  * 口座情報取得
    //  * @method getAccount
    //  */
    // public getAccount(index: number) {
    //     if (this.data.accounts.length === 0) {
    //         return undefined;
    //     }
    //     return this.data.accounts[index];
    // }

    // /**
    //  * 基本情報変更
    //  * @method updateProfile
    //  */
    // public async updateProfile(args: {
    //     familyName: string;
    //     givenName: string;
    //     email: string;
    //     telephone: string;
    //     postalCode: string;
    // }) {
    //     await this.entamecoin.getServices();
    //     await this.entamecoin.person.updateContacts({
    //         personId: 'me',
    //         contacts: {
    //             familyName: args.familyName,
    //             givenName: args.givenName,
    //             email: args.email,
    //             telephone: args.telephone
    //         }
    //     });
    //     const contact = await this.entamecoin.person.getContacts({
    //         personId: 'me'
    //     });
    //     if (contact === undefined) {
    //         throw new Error('contact is undefined');
    //     }
    //     this.data.contact = contact;

    //     this.save();
    // }

}
