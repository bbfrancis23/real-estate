import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
'use strict';

@Injectable()
export class AppService {

  themes = ['cobra-kai', 'corporation', 'electric-blue', 'pink-lemonaid'];

  defaultTheme = 'electric-blue-theme';

  readonly themeSource = new BehaviorSubject<string>(this.defaultTheme);
  readonly currentTheme = this.themeSource.asObservable();
  public changeTheme(theme: string) { this.themeSource.next(theme) }

  constructor() { }

  ngOnDestroy() {
  }
}
