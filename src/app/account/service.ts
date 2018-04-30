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

  readonly accountSource = new BehaviorSubject<Account>(this.account);
  readonly currentAccount = this.accountSource.asObservable();
  public changeAccount(account: Account) { this.accountSource.next(account) }


  constructor(readonly http: Http) {

    this.http.get('/api/accounts/me')
      .toPromise()
      .then(res => {

        this.account = res.json();
        this.account.authenticated = true;

        this.changeAccount(this.account);

        console.log(this.account);
      })
      .catch(err => console.log(err))
  }


  uploadImg(img) {

    let fd = new FormData();
    console.log(img);
    console.log(img.name)
    console.log(fd);
    fd.append('image', img, img.name);

    console.log(fd);

    this.http.post('/api/accounts/img', fd).subscribe(
      res => {
        this.account = res.json();
        this.account.authenticated = true;
        this.changeAccount(this.account);
      }
    );
  }

  updateName(name) {

    return this.http.post('/api/accounts/name', { name: name }, { headers: this.headers })
      .toPromise()
      .then(res => {

        this.account = res.json();
        this.account.authenticated = true;
        this.account.name = name;
        this.changeAccount(this.account);
        return true;
      })
      .catch(err => err);
  }

  updatePhone(phone) {
    return this.http.post('/api/accounts/phone', { phone: phone }, { headers: this.headers })
      .toPromise()
      .then(res => {

        this.account = res.json();
        this.account.authenticated = true;
        this.account.phone = phone;
        this.changeAccount(this.account);
        return true;
      })
      .catch(err => err);
  }

  updateAddress(address) {


    return this.http.post('/api/accounts/address', {
      address
    }, { headers: this.headers })
      .toPromise()
      .then(res => {
        this.account = res.json();
        this.account.authenticated = true;
        this.account.address = address;
        this.changeAccount(this.account);

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

  logout() {
    this.http.get('/api/accounts/logout').toPromise().then(res => {
      window.location.reload();
    }).catch(err => err);
  }

  authAccount(account) {

    return this.http.post('/api/auth', JSON.stringify(account), { headers: this.headers })
      .toPromise()
      .then(res => {
        this.account.authenticated = true;
        this.account.email = account.email;
        this.account._id = res.json()._id;
        console.log(this.account);
        window.location.reload();
        return true;

      }
      )
      .catch(err => err);
  }

  promote(rank: number) {
    this.http.post('/api/accounts/promote', { rank: rank }, { headers: this.headers }).toPromise().then(res => {
      window.location.reload();
    }).catch(err => console.log(err));
  }
  // */
}
