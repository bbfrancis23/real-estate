import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'account-name-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AccountNameCtrl {
  readonly ACCOUNT_NAME = { max: 64 };

  title: FormControl;

  ngOnInit() {
    this.title = new FormControl('', [Validators.maxLength(this.ACCOUNT_NAME.max)]);
  }
}
