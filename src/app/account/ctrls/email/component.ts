import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'email-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class EmailControl {

  readonly EMAIL = { max: 256 };

  email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(this.EMAIL.max)]);

  getEmailError() {
    return this.email.hasError('required') ? 'You must enter a value'
      : this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
