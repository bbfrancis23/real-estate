import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs';

import { Account } from '../account/account';

import { HttpClient } from '@angular/common/http';

'use strict';

@Injectable()
export class AgentService {

  readonly headers = new Headers({ 'Content-Type': 'application/json' });

  clients: [Account];
  selectedClient: Account;

  private readonly clientsSource = new BehaviorSubject<[Account]>(this.clients);
  readonly currentClients = this.clientsSource.asObservable();
  private changeCurrentClients(clinets: [Account]) { this.clientsSource.next(clinets) }

  private readonly selectedClientSource = new BehaviorSubject<Account>(this.selectedClient);
  readonly currentSelectedClient = this.selectedClientSource.asObservable();
  public changeCurrentSelectedClient(client: Account) { this.selectedClientSource.next(client) }

  constructor(readonly http: HttpClient) {

  }



  getClients() {

    return this.http.get<[Account]>('/api/accounts/clients')
      .toPromise()
      .then(res => {
        this.clients = res;
        this.changeCurrentClients(this.clients);

        console.log(this.clients[0]);
        if (this.clients[0]) {
          this.changeCurrentSelectedClient(this.clients[0]);
        }
        //this.changeCurrentSelectedClient = this.clients[0];
      })
      .catch(err => console.log(err))
  }

  updateTheme(theme) {


    return this.http.post('/api/accounts/theme', { theme: theme })
      .toPromise()
      .then(res => {
      })
      .catch(err => console.log(err));
  }

}
