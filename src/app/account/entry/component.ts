import { Component } from '@angular/core';


@Component({
  selector: 'entry',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AccountEntry {

  readonly LOGIN = "SIGN IN";
  readonly CREATE = "NEW ACCOUNT";
  readonly FORGOT = "FORGOT PASSWORD"

  action = this.LOGIN;

}
