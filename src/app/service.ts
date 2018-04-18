import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
'use strict';

@Injectable()
export class AppService {

  themes = ['cobra-kai', 'corporation', 'electric-blue', 'pink-lemonaid'];

  private readonly themeSource = new BehaviorSubject<string>('cobra-kai-theme');
  readonly currentTheme = this.themeSource.asObservable();
  public changeTheme(theme: string) { this.themeSource.next(theme) }

  constructor() { }

  ngOnDestroy() {
  }
}
