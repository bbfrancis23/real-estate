import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'password-ctrl',
  templateUrl: 'component.html'

})
export class PasswordControl {
  @Input() passwordCtrl: FormControl;
  inputType = 'password';

  getPasswordError() {

    let password = this.passwordCtrl;


    console.log(password);

    return password.hasError('required') ? 'You must enter a value.'
      : password.hasError('pattern') ? 'Not a valid password.'
        : password.hasError('minlength') ? `Too Short.`
          : password.hasError('maxlength') ? 'Too long.' : '';
  }
}
