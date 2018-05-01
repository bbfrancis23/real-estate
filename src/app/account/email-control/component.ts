import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'email-ctrl',
  templateUrl: 'component.html'

})
export class EmailControl {
  @Input() emailCtrl: FormControl;


  getEmailError() {

  }
}
