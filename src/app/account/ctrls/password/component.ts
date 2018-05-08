import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'password-ctrl',
  templateUrl: 'component.html'

})
export class PasswordControl implements OnInit {

  readonly PASSWORD = { min: 4, max: 16, pattern: /^[^\s]+$/ };
  password: FormControl;
  inputType = 'password';

  ngOnInit() {
    this.password = new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD.min), Validators.maxLength(this.PASSWORD.max), Validators.pattern(this.PASSWORD.pattern)])

  }

  getPasswordError() {

    let password = this.password;

    return password.hasError('required') ? 'You must enter a value.'
      : password.hasError('pattern') ? 'Not a valid password.'
        : password.hasError('minlength') ? `Too Short.`
          : password.hasError('maxlength') ? 'Too long.' : '';
  }
}
