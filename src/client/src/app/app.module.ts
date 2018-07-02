/**
 * NgModule
 */

// tslint:disable:no-submodule-imports max-line-length
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AuthSigninComponent } from './components/auth/auth-signin/auth-signin.component';
import { AuthSignoutComponent } from './components/auth/auth-signout/auth-signout.component';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { SasakiService } from './services/sasaki/sasaki.service';
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
        IndexComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        AuthGuardService,
        StorageService,
        UserService,
        SasakiService,
        UtilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
