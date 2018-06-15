import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
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

  states: Array<State>;

  constructor(readonly http: HttpClient) { }

  getStates() {
    if (this.states) {

    } else {
      this.http.get<[State]>('/api/states')
        .toPromise()
        .then(res => {
          this.states = res;
        })
        .catch(err => console.log(err))
    }
  }

}
