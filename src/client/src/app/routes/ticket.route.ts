import { TicketIndexComponent } from '../components/pages/ticket/ticket-index/ticket-index.component';

/**
 * コインルーティング
 */
export const route = {
    path: 'ticket',
    children: [
        { path: '', component: TicketIndexComponent }
    ]
};
