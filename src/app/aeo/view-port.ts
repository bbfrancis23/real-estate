import { Component, HostListener, ElementRef, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'aeo-view-port',
  template: `
  <div >
    <ng-content>
    </ng-content>
  </div>
  `,
  styles: [`
    div{
      width: 100vw;
      height: 100vh;
    }`
  ],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class AeoViewPort {

  @Input() state = 'hide';

  constructor(public el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    //console.log(scrollPosition, componentPosition);



    if ((scrollPosition + 500) >= componentPosition && this.state === 'hide') {
      //console.log(scrollPosition, componentPosition, this);
      this.state = 'show';
    } else {
      //this.state = 'hide'
    }

  }
}
