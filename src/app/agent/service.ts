import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../account/account';
import { HttpClient } from '@angular/common/http';

'use strict';

@Injectable()
export class AgentService {

  clients: [Account];
  private readonly clientsSource = new BehaviorSubject<[Account]>(this.clients);
  readonly currentClients = this.clientsSource.asObservable();

  selectedClient: Account;
  private readonly selectedClientSource = new BehaviorSubject<Account>(this.selectedClient);
  readonly currentSelectedClient = this.selectedClientSource.asObservable();

  constructor(readonly http: HttpClient) { }

  changeCurrentClients(clients: [Account]) { this.clientsSource.next(clients) }
  changeCurrentSelectedClient(account: Account) { this.selectedClientSource.next(account) }

  getClients() {
    return this.http.get<[Account]>('/api/accounts/clients').toPromise().then(res => {
      this.clients = res;
      this.changeCurrentClients(this.clients);
      return true;
    }).catch(err => console.log(err))
  }

  updateTheme(theme) {
    return this.http.post('/api/accounts/theme', { theme: theme }).toPromise().then(res => { }).catch(err => console.log(err));
  }
}
