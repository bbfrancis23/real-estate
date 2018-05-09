import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Account } from '../account/account';

'use strict';

@Injectable()
export class AgentService {

  clients: [Account];

  private readonly clientsSource = new BehaviorSubject<[Account]>(this.clients);
  readonly currentClients = this.clientsSource.asObservable();
  private changeCurrentClients(clinets: [Account]) { this.clientsSource.next(clinets) }

  constructor(readonly http: Http) {

  }



  getClients() {
    if (this.clients) {

    } else {
      this.http.get('/api/accounts/clients')
        .toPromise()
        .then(res => {
          this.clients = res.json();
          this.changeCurrentClients(this.clients);

        })
        .catch(err => console.log(err))
    }
  }
}
