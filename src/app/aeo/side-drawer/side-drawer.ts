import { Component, Input } from '@angular/core';

@Component({
  selector: 'aeo-side-drawer',
  template: `
  <div class="aeo-sidedrawer-container" [ngClass]="{'closed': closed}">
    <button class="aeo-sidedrawer-control" mat-fab (click)="closed = !closed" matTooltipShowDelay="1000" matTooltip="Menu"><mat-icon >{{closed ? 'menu' : 'close'}}</mat-icon></button>
    <ng-content></ng-content>
  </div>`
})
export class AeoSideDrawer {
  @Input() closed = true;
}
