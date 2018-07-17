/**
 * AuthGuardService
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EntamecoinService } from '../entamecoin/entamecoin.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private entamecoin: EntamecoinService
    ) { }

    /**
     * 認証
     * @method canActivate
     * @returns {Promise<boolean>}
     */
    public async canActivate(): Promise<boolean> {
        try {
            await this.entamecoin.authorize();

            return true;
        } catch (err) {
            console.log('canActivate', err);
            this.router.navigate(['/auth']);

            return false;
        }
    }
}
