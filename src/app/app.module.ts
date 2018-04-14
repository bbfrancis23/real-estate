import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountModule } from './account/module';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AccountModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
