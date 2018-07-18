import * as animations from '@angular/animations';

export const fade = animations.trigger('fade', [
    // animations.state('*', animations.style({ opacity: 0 })),
    animations.transition(':enter', [
        animations.style({ opacity: 0 }),
        animations.animate('.2s', animations.style({ opacity: 1 }))
    ]),
    animations.transition(':leave', [
        animations.style({ opacity: 1 }),
        animations.animate('.2s', animations.style({ opacity: 0 }))
    ]),
]);

export const slide = animations.trigger('slide', [
    // animations.state('*', animations.style({  })),
    animations.transition(':enter', [
        animations.style({ transform: 'translateX(100%)' }),
        animations.animate('.2s ease-in-out', animations.style({ transform: 'translateX(0)' }))
    ]),
    animations.transition(':leave', [
        animations.style({ transform: 'translateX(0)' }),
        animations.animate('.2s ease-in-out', animations.style({ transform: 'translateX(-100%)' }))
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
