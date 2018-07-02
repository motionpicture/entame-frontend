import { Injectable } from '@angular/core';
import { factory } from '@motionpicture/sskts-api-javascript-client';
import { SasakiService } from '../sasaki/sasaki.service';
import { SaveType, StorageService } from '../storage/storage.service';


export interface IData {
    userName?: string;
    contact?: factory.person.IContact;
    creditCards: factory.paymentMethod.paymentCard.creditCard.ICheckedCard[];
    accounts: factory.pecorino.account.IAccount[];
    programMembershipOwnershipInfos: factory.ownershipInfo.IOwnershipInfo<'ProgramMembership'>[];
}

const STORAGE_KEY = 'user';

@Injectable()
export class UserService {

    public data: IData;

    constructor(
        private storage: StorageService,
        private sasaki: SasakiService
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
                creditCards: [],
                accounts: [],
                programMembershipOwnershipInfos: []
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
            creditCards: [],
            accounts: [],
            programMembershipOwnershipInfos: []
        };
        this.save();
    }

    /**
     * 会員初期化
     * @method initMember
     */
    public async initMember() {
        this.save();
        await this.sasaki.getServices();
        if (this.sasaki.userName === undefined) {
            throw new Error('userName is undefined');
        }
        // 連絡先取得
        const contact = await this.sasaki.person.getContacts({
            personId: 'me'
        });
        if (contact === undefined) {
            throw new Error('contact is undefined');
        }
        this.data.contact = contact;

        try {
            // クレジットカード検索
            const creditCards = await this.sasaki.person.findCreditCards({
                personId: 'me'
            });
            this.data.creditCards = creditCards;
        } catch (err) {
            console.log(err);
            this.data.creditCards = [];
        }

        // 口座検索
        let accounts = await this.sasaki.person.findAccounts({
            personId: 'me'
        });
        accounts = accounts.filter((account) => {
            return account.status === factory.pecorino.accountStatusType.Opened;
        });
        if (accounts.length === 0) {
            // 口座開設
            const account = await this.sasaki.person.openAccount({
                personId: 'me',
                name: this.sasaki.userName
            });
            this.data.accounts.push(account);
        } else {
            this.data.accounts = accounts;
        }

        const programMembershipOwnershipInfos = await this.sasaki.person.searchOwnershipInfos({
            ownedBy: 'me',
            goodType: 'ProgramMembership'
        });

        this.data.programMembershipOwnershipInfos = programMembershipOwnershipInfos;

        this.save();
    }

    /**
     * 口座情報更新
     * @method updateAccount
     */
    public async updateAccount() {
        await this.sasaki.getServices();
        // 口座検索
        let accounts = await this.sasaki.person.findAccounts({
            personId: 'me'
        });
        accounts = accounts.filter((account) => {
            return account.status === factory.pecorino.accountStatusType.Opened;
        });
        if (accounts.length === 0) {
            // 口座開設
            const account = await this.sasaki.person.openAccount({
                personId: 'me',
                name: this.getName()
            });
            this.data.accounts.push(account);
        } else {
            this.data.accounts = accounts;
        }
        this.save();
    }

    /**
     * 名前取得
     * @method getName
     */
    public getName() {
        if (this.data.contact === undefined) {
            return '';
        }
        return `${this.data.contact.familyName} ${this.data.contact.givenName}`;
    }

    /**
     * 電話番号取得（ハイフンなし）
     * @method getTelephone
     */
    public getTelephone() {
        if (this.data.contact === undefined) {
            return '';
        }
        return this.data.contact.telephone.replace(/\-/g, '');
    }

    /**
     * 口座情報取得
     * @method getAccount
     */
    public getAccount(index: number) {
        if (this.data.accounts.length === 0) {
            return undefined;
        }
        return this.data.accounts[index];
    }

    /**
     * 基本情報変更
     * @method updateProfile
     */
    public async updateProfile(args: {
        familyName: string;
        givenName: string;
        email: string;
        telephone: string;
        postalCode: string;
    }) {
        await this.sasaki.getServices();
        await this.sasaki.person.updateContacts({
            personId: 'me',
            contacts: {
                familyName: args.familyName,
                givenName: args.givenName,
                email: args.email,
                telephone: args.telephone
            }
        });
        const contact = await this.sasaki.person.getContacts({
            personId: 'me'
        });
        if (contact === undefined) {
            throw new Error('contact is undefined');
        }
        this.data.contact = contact;

        this.save();
    }

}
