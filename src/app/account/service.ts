import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

'use strict';

@Injectable()
export class AccountService {
  readonly PASSWORD = { min: 4, max: 16, pattern: /^[^\s]+$/ };
  readonly headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(readonly http: Http) { }

  createAccount(account) {

    return this.http.post('/api/accounts', JSON.stringify(account), { headers: this.headers })
      .toPromise()
      .then(res => {
        console.log(res);
        return res.json()
      })
      .catch(err => err);

  }

  authAccount(account) {

    return this.http.post('/api/auth', JSON.stringify(account), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(err => err);

  }
  // */
}
