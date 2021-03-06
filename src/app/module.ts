import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatProgressSpinnerModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatTooltipModule, MatInputModule, MatListModule } from '@angular/material';
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
import { MilieuService } from './aeo/milieu/service';
import { APP_BASE_HREF } from '@angular/common';



import { HttpClientModule } from '@angular/common/http';

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
    MatAutocompleteModule, MatProgressSpinnerModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatTooltipModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule

  ],
  entryComponents: [AccountDialog, SettingsDialog],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AccountService, AppService, MilieuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
