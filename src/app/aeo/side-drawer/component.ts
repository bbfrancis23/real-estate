import { Component, Input } from '@angular/core';

@Component({
  selector: 'aeo-side-drawer',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class AeoSideDrawer {
  @Input() closed = true;
}
