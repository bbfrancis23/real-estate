import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { Account } from './account'
import { AgentService } from '../agent/service';


'use strict';

@Injectable()
export class AccountService {

  // to do get rid of all this ///////////////////////////////////////////////////
  readonly PASSWORD = { min: 4, max: 16, pattern: /^[^\s]+$/ };
  readonly NAME = { max: 64 };
  readonly EMAIL = { max: 256 };
  readonly ADDRESS = { max: 256 };
  readonly CITY = { max: 32 };
  readonly ZIP = { min: 5, max: 10, pattern: /^[0-9\-]+$/ }
  emailCtrl = new FormControl('', [Validators.required, Validators.email, Validators.max(this.EMAIL.max)]);
  passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(this.PASSWORD.min), Validators.maxLength(this.PASSWORD.max), Validators.pattern(this.PASSWORD.pattern)])
  nameCtrl = new FormControl('', [Validators.maxLength(this.NAME.max)]);
  photoCtrl = new FormControl('', []);

  /////////////////////////////////////////////////////////////////////////////////

  account: Account;

  readonly accountSource = new BehaviorSubject<Account>(this.account);
  readonly currentAccount = this.accountSource.asObservable();
  public changeAccount(account: Account) { this.accountSource.next(account) }


  constructor(readonly http: HttpClient, public router: Router, public agentService: AgentService) {

    this.http.get<Account>('/api/accounts/me').toPromise().then(res => {
      this.account = res;
      this.account.authenticated = true;
      this.changeAccount(this.account);
      if (this.account.type === 'Agent') {
        router.navigate(['agent'])
      } else if (this.account.type === 'Client') {
        router.navigate(['account']);
      }
    }).catch(err => console.log(err))
  }

  getAccount() {
    this.http.get<Account>('/api/accounts/me').toPromise().then(res => {
      this.account = res;
      this.account.authenticated = true;
      this.changeAccount(this.account);
    }).catch(err => console.log(err))
  }

  uploadImg(img, _id?: string) {
    let fd = new FormData();
    fd.append('image', img, img.name);

    if (_id) {
      return this.http.post(`/api/accounts/img/${_id}`, fd).toPromise().then(res => res);
    } else {
      return this.http.post('/api/accounts/img', fd).toPromise().then(res => res);
    }

  }

  updateName(name: string, _id?: string) {

    let obj = {};
    if (_id) {
      obj = { name: name, _id: _id }
    } else {
      obj = { name: name }
    }

    return this.http.post('/api/accounts/name', obj).toPromise().then(res => true).catch(err => false);
  }

  updateEmail(email: string, _id?: string) {

    let obj = {};
    if (_id) {
      obj = { email: email, _id: _id }
    } else {
      obj = { email: email }
    }

    return this.http.post('/api/accounts/email', obj).toPromise().then(res => {
      return { result: true, code: 1, message: 'Email was successfully updated.' }
    }).catch(err => {
      if (err.error.message.code === 11000) {
        return { result: false, code: err.error.message.code, message: 'Email Address is already taken.' }
      } else {
        return { result: false, code: 0, message: 'Unknown Error' }
      }
    });
  }

  updatePassword(password: string, _id?: string) {

    let obj = {};
    if (_id) {
      obj = { password: password, _id: _id }
    } else {
      obj = { password: password }
    }

    console.log(obj);

    return this.http.post('/api/accounts/password', obj).toPromise().then(res => {
      return { result: true, code: 1, message: 'Password was successfully updated.' }
    }).catch(err => {

      return { result: false, code: 0, message: 'Unknown Error' }
    });
  }

  updatePhone(phone, _id?: string) {

    //console.log(phone, _id);

    let obj = {};
    if (_id) {
      obj = { phone: phone, _id: _id }
    } else {
      obj = { phone: phone }
    }

    return this.http.post('/api/accounts/phone', obj)
      .toPromise()
      .then(res => true).catch(err => false);
  }

  updateAddress(address, _id?: string) {

    let obj = {};
    if (_id) {
      obj = { address: address, _id: _id }
    } else {
      obj = { address: address }
    }


    return this.http.post('/api/accounts/address', obj).toPromise().then(
      res => {
        return true;
      }
    ).catch(
      err => {
        return false;
      }
    );
  }

  createAccount(account) {
    let a: any = {};
    a.email = account.email;
    a.password = account.password;

    if (account.name) {
      a.name = account.name;
    }

    if (account.type) {
      a.type = account.type;
    }

    if (account.address && account.city && account.state && account.zip) {
      a.address = {};
      a.address.address = account.address;
      a.address.city = account.city;
      a.address.state = account.state;
      a.address.zip = account.zip;
    }

    if (account.areaCode && account.prefix && account.suffix) {
      a.phone = `${account.areaCode}${account.prefix}${account.suffix}`;
    }

    if (account.agent) {
      a.agent = account.agent;
    }

    return this.http.post('/api/accounts', a)
      .toPromise()
      .then(res => {

        this.agentService.getClients();

        return true;
      })
      .catch(err => console.log(err));

  }

  logout() {
    console.log('logging out');
    this.http.get('/api/accounts/logout').toPromise().then(
      res => {
        this.router.navigate(['']);
      })
      .catch(err => console.log(err)
      );
  }

  authAccount(account) {
    return this.http.post('/api/auth', account).toPromise().then(res => res).catch(err => err);
  }

  promote(rank: number) {
    this.http.post('/api/accounts/promote', { rank: rank }).toPromise().then(res => window.location.reload()).catch(err => console.log(err));
  }
}
