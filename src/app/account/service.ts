import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Account } from './account'

'use strict';

@Injectable()
export class AccountService {
  readonly PASSWORD = { min: 4, max: 16, pattern: /^[^\s]+$/ };
  readonly NAME = { max: 64 };
  readonly ADDRESS = { max: 256 };
  readonly CITY = { max: 32 };
  readonly ZIP = { min: 5, max: 10, pattern: /^[0-9\-]+$/ }


  readonly headers = new Headers({ 'Content-Type': 'application/json' });
  account = new Account();


  constructor(readonly http: Http) {

    this.http.get('/api/accounts/me')
      .toPromise()
      .then(res => {
        this.account.authenticated = true;
        this.account.email = res.json().email;
        this.account._id = res.json()._id;
      })
      .catch(err => console.log(err))
  }


  updateName(name) {

    return this.http.post('/api/accounts/name', { name: name }, { headers: this.headers })
      .toPromise()
      .then(res => {
        console.log(res);
        return true;
      })
      .catch(err => err);
  }

  updatePhone(phone) {
    return this.http.post('/api/accounts/phone', { phone: phone }, { headers: this.headers })
      .toPromise()
      .then(res => {
        console.log(res);
        return true;
      })
      .catch(err => err);
  }

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
        console.log(this.account);
        return true;

      }
      )
      .catch(err => err);



  }
  // */
}
