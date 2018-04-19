import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AeoModule } from './aeo/module';
import { AccountModule } from './account/module';
import { AccountDialog } from './account/dialog/dialog';
import { AppComponent } from './component';
import { AppService } from './service';
import { AccountService } from './account/service';
import { SettingsDialog } from './settings-dialog/component';

'use strict';

@NgModule({
  declarations: [
    AccountDialog,
    AppComponent,
    SettingsDialog
  ],
  imports: [
    AccountModule,
    AeoModule,
    BrowserModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatTooltipModule,
    ReactiveFormsModule
  ],
  entryComponents: [AccountDialog, SettingsDialog],
  providers: [AccountService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
