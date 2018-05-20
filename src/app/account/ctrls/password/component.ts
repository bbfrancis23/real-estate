import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'password-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class PasswordControl {

  readonly PASSWORD = { min: 4, max: 16, pattern: /^[^\s]+$/ };
  password = new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD.min), Validators.maxLength(this.PASSWORD.max), Validators.pattern(this.PASSWORD.pattern)])
  inputType = 'password';


  getPasswordError() {
    let password = this.password;
    return password.hasError('required') ? ''
      : password.hasError('pattern') ? 'Invalid'
        : password.hasError('minlength') ? `Too Short.`
          : password.hasError('maxlength') ? 'Too long.' : '';
  }
}
