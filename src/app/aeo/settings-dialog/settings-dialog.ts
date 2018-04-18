import { Component } from '@angular/core';
import { AppService } from '../../app.service';

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
          <li class="settings-item" [id]="theme+'-theme-select'" (click)="updateTheme(theme)" matTooltip="{{theme | capitalize}}"></li>
          <br *ngIf="i===3">
        </span>
      </ul>
      <p>Choose a Photo</p>
      <ul>
        <li class="settings-item" *ngFor="let img of appService.profileImg; let i = index" (click)="updateProfileImage(i)"><img [src]="img"></li>
      </ul>
      <br>
    </mat-dialog-content>
    <button mat-mini-fab [mat-dialog-close]="true"><mat-icon aria-label="Okay">check</mat-icon></button>
  </div>`,
  styleUrls: ['./settings-dialog.scss']
})
export class SettingsDialog {
  constructor(public appService: AppService) { }

  updateTheme(theme: string) {
    this.appService.changeTheme(theme + '-theme');
    this.appService.hero = `${this.appService.imgDir}theme/background/${theme}.jpg`;
  }

  updateProfileImage(i: number) {
    this.appService.profileImgIndex = i;
    this.appService.changeprofileImg();
  }
}
