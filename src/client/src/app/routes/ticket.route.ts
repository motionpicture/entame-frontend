import { TicketIndexComponent } from '../components/ticket/ticket-index/ticket-index.component';

/**
 * コインルーティング
 */
export const route = {
    path: 'ticket',
    children: [
        { path: '', component: TicketIndexComponent }
    ]
};
