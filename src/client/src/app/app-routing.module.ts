/**
 * ルーティング
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { IndexComponent } from './components/index/index.component';
import * as auth from './routes/auth.route';
import * as coin from './routes/coin.route';
import * as pointCard from './routes/point-card.route';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        component: BaseComponent,
        canActivate: [],
        children: [
            { path: '', component: IndexComponent },
            pointCard.route,
            coin.route
        ]
    },
    auth.route
];

// tslint:disable-next-line:no-stateless-class
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { useHash: true, enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
