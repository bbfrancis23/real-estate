import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'account-name-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AccountNameControl {

  @Input() submitButton = false;
  readonly ACCOUNT_NAME = { max: 64 };
  accountName = new FormControl('', [Validators.maxLength(this.ACCOUNT_NAME.max)]);
}
