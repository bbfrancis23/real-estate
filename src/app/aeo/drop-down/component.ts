import { Component, Input } from '@angular/core'

@Component({
  selector: 'drop-down',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class DropDown {
  @Input() displayList = false;

  clicky() {
    console.log('clicky');
  }

  clicker() {
    console.log('clicker');
  }
}
