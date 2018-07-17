/**
 * NgModule
 */

// tslint:disable:no-submodule-imports max-line-length
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AuthIndexComponent } from './components/auth/auth-index/auth-index.component';
import { AuthSigninComponent } from './components/auth/auth-signin/auth-signin.component';
import { AuthSignoutComponent } from './components/auth/auth-signout/auth-signout.component';
import { BaseComponent } from './components/base/base.component';
import { CoinIndexComponent } from './components/coin/coin-index/coin-index.component';
import { CoinPaymentAccountComponent } from './components/coin/coin-payment-account/coin-payment-account.component';
import { CoinPaymentCompleteComponent } from './components/coin/coin-payment-complete/coin-payment-complete.component';
import { CoinPaymentCreditComponent } from './components/coin/coin-payment-credit/coin-payment-credit.component';
import { CoinPaymentInputComponent } from './components/coin/coin-payment-input/coin-payment-input.component';
import { CoinPaymentSelectComponent } from './components/coin/coin-payment-select/coin-payment-select.component';
import { IndexComponent } from './components/index/index.component';
import { CoinHeaderComponent } from './components/parts/coin-header/coin-header.component';
import { HeaderMenuComponent } from './components/parts/header-menu/header-menu.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { LoadingComponent } from './components/parts/loading/loading.component';
import { PageComponent } from './components/parts/page/page.component';
import { PointCardHeaderComponent } from './components/parts/point-card-header/point-card-header.component';
import { PointCardIndexComponent } from './components/point-card/point-card-index/point-card-index.component';
import { PointCardTransferCompleteComponent } from './components/point-card/point-card-transfer-complete/point-card-transfer-complete.component';
import { PointCardTransferInputComponent } from './components/point-card/point-card-transfer-input/point-card-transfer-input.component';
import { TicketIndexComponent } from './components/ticket/ticket-index/ticket-index.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { EntamecoinService } from './services/entamecoin/entamecoin.service';
import { StorageService } from './services/storage/storage.service';
import { UserService } from './services/user/user.service';
import { UtilService } from './services/util/util.service';

// tslint:disable-next-line:no-stateless-class
@NgModule({
    declarations: [
        AppComponent,
        BaseComponent,
        AuthSigninComponent,
        AuthSignoutComponent,
        IndexComponent,
        CoinIndexComponent,
        CoinPaymentSelectComponent,
        CoinPaymentInputComponent,
        CoinPaymentCompleteComponent,
        PointCardIndexComponent,
        PointCardTransferInputComponent,
        PointCardTransferCompleteComponent,
        HeaderComponent,
        PageComponent,
        HeaderMenuComponent,
        CoinPaymentCreditComponent,
        CoinPaymentAccountComponent,
        CoinHeaderComponent,
        PointCardHeaderComponent,
        AuthIndexComponent,
        LoadingComponent,
        TicketIndexComponent
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        AuthGuardService,
        StorageService,
        UserService,
        EntamecoinService,
        UtilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
