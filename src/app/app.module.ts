import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountModule } from './account/module';
import { MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AccountDialog } from './account/dialog/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountService } from './account/service';

@NgModule({
  declarations: [
    AppComponent,
    AccountDialog
  ],
  imports: [
    AccountModule,
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatTooltipModule
  ],
  entryComponents: [AccountDialog],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
