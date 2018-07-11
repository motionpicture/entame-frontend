import * as animations from '@angular/animations';

export const fade = animations.trigger('fade', [
    animations.transition(':enter', [
        animations.style({ opacity: 0 }),
        animations.animate('.3s', animations.style({ opacity: 1 }))
    ]),
    animations.transition(':leave', [
        animations.style({ opacity: 1 }),
        animations.animate('.3s', animations.style({ opacity: 0 }))
    ]),
]);

export const slide = animations.trigger('slide', [
    animations.state('*', animations.style({ left: 0, width: '100%' })),
    animations.transition(':enter', [
        animations.style({ left: '100%' }),
        animations.animate('.2s ease-in-out', animations.style({ left: 0 }))
    ]),
    animations.transition(':leave', [
        animations.style({ left: 0 }),
        animations.animate('.2s ease-in-out', animations.style({ left: '-100%' }))
    ])
]);


export const scale = animations.trigger('scale', [
    animations.transition(':enter', [
        animations.style({ transform: 'scale(0.5)' }),
        animations.animate('.1s', animations.style({ transform: 'scale(1)' }))
    ]),
    animations.transition(':leave', [
        animations.style({ transform: 'scale(1)' }),
        animations.animate('.1s', animations.style({ transform: 'scale(0.5)' }))
    ]),
]);
