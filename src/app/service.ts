import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Headers, Http } from '@angular/http';
import { State } from './state';


import { HttpClient } from '@angular/common/http';
'use strict';

@Injectable()
export class AppService {

  themes = ['arizona', 'beach', 'cobra-kai', 'corporation', 'electric-blue', 'lush', 'midnight', 'pink-lemonaid', 'pirate', 'tech', 'tropical', 'utah'];
  defaultTheme = 'corporation-theme';

  readonly themeSource = new BehaviorSubject<string>(this.defaultTheme);
  readonly currentTheme = this.themeSource.asObservable();
  public changeTheme(theme: string) { this.themeSource.next(theme) }

  readonly headers = new Headers({ 'Content-Type': 'application/json' });


  states: Array<State>;

  constructor(readonly http: HttpClient) { }

  getStates() {
    if (this.states) {

    } else {
      this.http.get('/api/states')
        .toPromise()
        .then(res => {
          //this.states = res.json();
        })
        .catch(err => console.log(err))
    }
  }

  ngOnDestroy() {
  }
}
