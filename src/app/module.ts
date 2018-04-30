import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AeoModule } from './aeo/module';
import { AccountModule } from './account/module';
import { AccountDialog } from './account/dialog/component';
import { AppComponent } from './component';
import { AppService } from './service';
import { AccountService } from './account/service';
import { SettingsDialog } from './settings-dialog/component';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './routing.module';
import { DefaultComponet } from './default';
'use strict';

@NgModule({
  declarations: [
    AccountDialog,
    AppComponent,
    SettingsDialog,
    DefaultComponet,
  ],
  imports: [
    AccountModule,
    AeoModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatTooltipModule,
    ReactiveFormsModule,
    RouterModule

  ],
  entryComponents: [AccountDialog, SettingsDialog],
  providers: [AccountService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
