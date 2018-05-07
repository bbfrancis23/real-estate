import { Component, Input } from '@angular/core';

@Component({
  selector: 'address-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AddressControl {
  @Input() states;
}
