import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs';
import { Account } from './account'
import { FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AgentService } from '../agent/service';

'use strict';

@Injectable()
export class AccountService {
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



  readonly headers = new Headers({ 'Content-Type': 'application/json' });

  account: Account = new Account();

  readonly accountSource = new BehaviorSubject<Account>(this.account);
  readonly currentAccount = this.accountSource.asObservable();
  public changeAccount(account: Account) { this.accountSource.next(account) }


  constructor(readonly http: HttpClient, router: Router, public agentService: AgentService) {

    this.http.get<Account>('/api/accounts/me')
      .toPromise()
      .then(res => {

        this.account = res;


        this.account.authenticated = true;
        this.changeAccount(this.account);
        if (this.account.type === 'Agent') {
          router.navigate(['agent'])
        }

      })
      .catch(err => console.log(err))
  }


  getAccount() {
    this.http.get<Account>('/api/accounts/me')
      .toPromise()
      .then(res => {

        this.account = res;


        this.account.authenticated = true;
        this.changeAccount(this.account);


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
        //this.account = res.json();
        //this.account.authenticated = true;
        //this.changeAccount(this.account);
      }
    );
  }

  updateName(name: string, _id?: string) {

    let obj = {};
    if (_id) {
      obj = { name: name, _id: _id }
    } else {
      obj = { name: name }
    }

    return this.http.post('/api/accounts/name', obj)
      .toPromise()
      .then(res => {
        return true;
      })
      .catch(err => false);
  }

  updatePhone(phone) {
    return this.http.post('/api/accounts/phone', { phone: phone })
      .toPromise()
      .then(res => {

        //this.account = res.json();
        //this.account.authenticated = true;
        //this.account.phone = phone;
        //this.changeAccount(this.account);
        return true;
      })
      .catch(err => err);
  }

  updateAddress(address) {


    return this.http.post('/api/accounts/address', {
      address
    })
      .toPromise()
      .then(res => {
        //this.account = res.json();
        //this.account.authenticated = true;
        //this.account.address = address;
        //this.changeAccount(this.account);

        return true;
      })
      .catch(err => err);
  }

  createAccount(account) {

    //console.log(account);


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
    this.http.get('/api/accounts/logout').toPromise().then(res => {
      window.location.reload();
    }).catch(err => err);
  }

  authAccount(account) {

    return this.http.post('/api/auth', account)
      .toPromise()
      .then(res => {
        this.account.authenticated = true;
        this.account.email = account.email;
        //this.account._id = res.json()._id;
        //console.log(this.account);
        window.location.reload();
        return true;

      }
      )
      .catch(err => err);
  }

  promote(rank: number) {
    this.http.post('/api/accounts/promote', { rank: rank }).toPromise().then(res => {
      window.location.reload();
    }).catch(err => console.log(err));
  }
  // */
}
