import { Component } from '@angular/core';
import { AppService } from '../service';

"use strict";

@Component({
  selector: 'settings-dialog',
  templateUrl: 'component.html',
  styleUrls: ['./styles.scss']
})
export class SettingsDialog {
  constructor(public appService: AppService) { }

  updateTheme(theme: string) {
    this.appService.changeTheme(theme + '-theme');
  }
}
