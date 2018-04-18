import { Component } from '@angular/core';
import { AppService } from '../service';

"use strict";

@Component({
  selector: 'settings-dialog',
  template: `
  <div>
    <span mat-dialog-title>Application Settings</span>
    <mat-dialog-content>
      <p>Choose a Theme</p>
      <ul>
        <span *ngFor="let theme of appService.themes; let i = index">
          <li class="settings-item" [id]="theme+'-theme-select'" (click)="updateTheme(theme)" matTooltip="{{theme | urldecode:true}}"></li>
          <br *ngIf="i===3">
        </span>
      </ul>
    </mat-dialog-content>
    <button mat-mini-fab [mat-dialog-close]="true"><mat-icon aria-label="Okay">check</mat-icon></button>
  </div>`,
  styleUrls: ['./settings-dialog.scss']
})
export class SettingsDialog {
  constructor(public appService: AppService) { }

  updateTheme(theme: string) {
    this.appService.changeTheme(theme + '-theme');
  }
}
