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
import { AuthIndexComponent } from './components/pages/auth/auth-index/auth-index.component';
import { AuthSigninComponent } from './components/pages/auth/auth-signin/auth-signin.component';
import { AuthSignoutComponent } from './components/pages/auth/auth-signout/auth-signout.component';
import { BaseComponent } from './components/pages/base/base.component';
import { CoinIndexComponent } from './components/pages/coin/coin-index/coin-index.component';
import { CoinPaymentAccountComponent } from './components/pages/coin/coin-payment-account/coin-payment-account.component';
import { CoinPaymentCompleteComponent } from './components/pages/coin/coin-payment-complete/coin-payment-complete.component';
import { CoinPaymentCreditComponent } from './components/pages/coin/coin-payment-credit/coin-payment-credit.component';
import { CoinPaymentInputComponent } from './components/pages/coin/coin-payment-input/coin-payment-input.component';
import { CoinPaymentSelectComponent } from './components/pages/coin/coin-payment-select/coin-payment-select.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { IndexComponent } from './components/pages/index/index.component';
import { PointCardIndexComponent } from './components/pages/point-card/point-card-index/point-card-index.component';
import { PointCardTransferCompleteComponent } from './components/pages/point-card/point-card-transfer-complete/point-card-transfer-complete.component';
import { PointCardTransferInputComponent } from './components/pages/point-card/point-card-transfer-input/point-card-transfer-input.component';
import { TicketIndexComponent } from './components/pages/ticket/ticket-index/ticket-index.component';
import { CoinHeaderComponent } from './components/parts/coin-header/coin-header.component';
import { HeaderMenuComponent } from './components/parts/header-menu/header-menu.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { IndexHeaderComponent } from './components/parts/index-header/index-header.component';
import { LoadingComponent } from './components/parts/loading/loading.component';
import { PageComponent } from './components/parts/page/page.component';
import { PointCardHeaderComponent } from './components/parts/point-card-header/point-card-header.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { MocoinService } from './services/mocoin/mocoin.service';
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
        TicketIndexComponent,
        ErrorComponent,
        IndexHeaderComponent
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
        MocoinService,
        UtilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
