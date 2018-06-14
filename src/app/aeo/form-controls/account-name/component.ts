import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'account-name-form-control',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AccountNameFormControl {
  readonly ACCOUNT_NAME = { max: 64 };

  @Input() showSubmit = false;
  @Input() focus = false;
  accountName = new FormControl('', [Validators.required, Validators.maxLength(this.ACCOUNT_NAME.max)]);

  getAccountNameError() {

  }
}
