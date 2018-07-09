import { CoinIndexComponent } from '../components/coin/coin-index/coin-index.component';
import { CoinPaymentAccountComponent } from '../components/coin/coin-payment-account/coin-payment-account.component';
import { CoinPaymentCompleteComponent } from '../components/coin/coin-payment-complete/coin-payment-complete.component';
import { CoinPaymentCreditComponent } from '../components/coin/coin-payment-credit/coin-payment-credit.component';
import { CoinPaymentSelectComponent } from '../components/coin/coin-payment-select/coin-payment-select.component';

/**
 * コインルーティング
 */
export const route = {
    path: 'coin',
    children: [
        { path: '', component: CoinIndexComponent },
        {
            path: 'payment',
            children: [
                { path: 'complete', component: CoinPaymentCompleteComponent },
                { path: 'credit', component: CoinPaymentCreditComponent },
                { path: 'account', component: CoinPaymentAccountComponent },
                { path: 'select', component: CoinPaymentSelectComponent }
            ]
        }
    ]
};
