import { CoinIndexComponent } from '../components/coin/coin-index/coin-index.component';
import { CoinPaymentCompleteComponent } from '../components/coin/coin-payment-complete/coin-payment-complete.component';
import { CoinPaymentInputComponent } from '../components/coin/coin-payment-input/coin-payment-input.component';
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
                { path: 'input', component: CoinPaymentInputComponent },
                { path: 'select', component: CoinPaymentSelectComponent }
            ]
        }
    ]
};
