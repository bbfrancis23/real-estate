import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Headers, Http } from '@angular/http';
import { State } from './state';
'use strict';

@Injectable()
export class AppService {

  themes = ['cobra-kai', 'corporation', 'electric-blue', 'pink-lemonaid'];
  defaultTheme = 'cobra-kai-theme';

  readonly themeSource = new BehaviorSubject<string>(this.defaultTheme);
  readonly currentTheme = this.themeSource.asObservable();
  public changeTheme(theme: string) { this.themeSource.next(theme) }

  readonly headers = new Headers({ 'Content-Type': 'application/json' });


  states: Array<State>;

  constructor(readonly http: Http) { }

  getStates() {
    if (this.states) {

    } else {
      this.http.get('/api/states')
        .toPromise()
        .then(res => {
          this.states = res.json();
        })
        .catch(err => console.log(err))
    }
  }

  ngOnDestroy() {
  }
}
