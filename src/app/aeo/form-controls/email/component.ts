import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'email-form-control',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class EmailFormControl {
  readonly EMAIL = { max: 256 };

  @Input() showSubmit = false;

  @Input() focus = false;
  email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(this.EMAIL.max)]);

  getEmailError() {
    return this.email.hasError('required') ? ''
      : this.email.hasError('email') ? 'Invalid'
        : this.email.hasError('unique') ? 'Email alreay in use.'
          : this.email.hasError('database') ? 'Database Error' : '';
  }
}
