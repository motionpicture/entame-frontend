import { AuthSigninComponent } from '../components/auth/auth-signin/auth-signin.component';
import { AuthSignoutComponent } from '../components/auth/auth-signout/auth-signout.component';

/**
 * 認証ルーティング
 */
export const route = {
    path: 'auth',
    children: [
        { path: 'signin', component: AuthSigninComponent },
        { path: 'signout', component: AuthSignoutComponent }
    ]
};
