import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'email-ctrl',
  templateUrl: 'component.html'

})
export class EmailControl {
  @Input() emailCtrl: FormControl;

  getEmailError() {
    return this.emailCtrl.hasError('required') ? 'You must enter a value'
      : this.emailCtrl.hasError('email') ? 'Not a valid email' : '';
  }
}
