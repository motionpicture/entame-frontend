// tslint:disable:max-line-length
import { PointCardIndexComponent } from '../components/pages/point-card/point-card-index/point-card-index.component';
import { PointCardTransferCompleteComponent } from '../components/pages/point-card/point-card-transfer-complete/point-card-transfer-complete.component';
import { PointCardTransferInputComponent } from '../components/pages/point-card/point-card-transfer-input/point-card-transfer-input.component';

/**
 * ポイント＆カードルーティング
 */
export const route = {
    path: 'point-card',
    children: [
        { path: '', component: PointCardIndexComponent },
        {
            path: 'transfer',
            children: [
                { path: 'complete', component: PointCardTransferCompleteComponent },
                { path: 'input', component: PointCardTransferInputComponent }
            ]
        }
    ]
};
