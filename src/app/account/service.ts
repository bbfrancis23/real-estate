import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Account } from './account'

'use strict';

@Injectable()
export class AccountService {
  readonly PASSWORD = { min: 4, max: 16, pattern: /^[^\s]+$/ };
  readonly headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(readonly http: Http) { }

  account = new Account();

  createAccount(account) {

    return this.http.post('/api/accounts', JSON.stringify(account), { headers: this.headers })
      .toPromise()
      .then(res => {

        return true;
      })
      .catch(err => err);

  }

  authAccount(account) {

    return this.http.post('/api/auth', JSON.stringify(account), { headers: this.headers })
      .toPromise()
      .then(res => {
        this.account.authenticated = true;
        this.account.email = account.email;
        this.account._id = res.json()._id;
        this.account.token = res.json().token;
        console.log(this.account);
        return true;

      }
      )
      .catch(err => err);



  }
  // */
}
