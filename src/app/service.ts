import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { State } from './state';
'use strict';

@Injectable()
export class AppService {

  themes = ['cobra-kai', 'corporation', 'electric-blue', 'pink-lemonaid'];

  defaultTheme = 'cobra-kai-theme';

  readonly themeSource = new BehaviorSubject<string>(this.defaultTheme);
  readonly currentTheme = this.themeSource.asObservable();
  public changeTheme(theme: string) { this.themeSource.next(theme) }

  states: Array<State>;

  constructor() { }

  getStates() {
    if (this.states) {

    } else {

    }
  }

  ngOnDestroy() {
  }
}
