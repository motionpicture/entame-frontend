/**
 * ルーティング
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import * as auth from './routes/auth.route';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: IndexComponent },
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
