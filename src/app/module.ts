import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatTooltipModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AeoModule } from './aeo/module';
import { AccountModule } from './account/module';
import { AgentModule } from './agent/module'
import { AccountDialog } from './account/dialog/component';
import { AppComponent } from './component';
import { AppService } from './service';
import { AccountService } from './account/service';
import { SettingsDialog } from './settings-dialog/component';
import { RouterModule, Routes } from '@angular/router';


import { AccountEntry } from './account/entry/component';
import { EmailControl } from './account/ctrls/email/component';
import { AppRoutingModule } from './routing.module';
import { DefaultComponet } from './default';
'use strict';

@NgModule({
  declarations: [
    AccountDialog,
    AccountEntry,
    AppComponent,
    SettingsDialog,
    DefaultComponet,
  ],
  imports: [
    AccountModule,
    AeoModule,
    AgentModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatTooltipModule,
    ReactiveFormsModule,
    RouterModule

  ],
  entryComponents: [AccountDialog, SettingsDialog],
  providers: [AccountService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
