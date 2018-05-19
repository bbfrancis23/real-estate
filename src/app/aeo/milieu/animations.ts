/*import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const fadeInOutAnimation: AnimationEntryMetadata =

  trigger('fadeInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ opacity: 0 }),
      animate('1000ms ease-in-out', style({ opacity: 1 }))
    ]),
    transition('* => void', [
      style({ opacity: 1 }),
      animate('1000ms ease-in-out', style({ opacity: 0 }))
    ])
  ]);

export const modalVueFadeInOut: AnimationEntryMetadata =

  trigger('modalVueFadeInOut', [
    state('true', style({ transform: 'translateX(0)' })),
    transition('false => true', [
      style({ opacity: 0 }),
      animate('1000ms linear', style({ opacity: 1 }))
    ]),
    transition('true => false', [
      style({ opacity: 0 }),
      animate('1000ms linear', style({ opacity: 1 }))
    ])
  ]);

export const flyInOut: AnimationEntryMetadata =
  trigger('flyInOut', [
    state('in', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('1s ease-in')
    ]),
    transition('* => void', [
      animate('1s 0.1s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ])
*/
