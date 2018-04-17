import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AeoModule } from './aeo/module';
import { AccountModule } from './account/module';
import { AccountDialog } from './account/dialog/dialog';
import { AppComponent } from './app.component';
import { AccountService } from './account/service';

'use strict';

@NgModule({
  declarations: [
    AccountDialog,
    AppComponent
  ],
  imports: [
    AccountModule,
    BrowserModule,
    FormsModule,
    MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatTooltipModule,
    ReactiveFormsModule
  ],
  entryComponents: [AccountDialog],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
