import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import { AccountRoutingModule } from './routing.module';
import { AccountComponent } from './component';

@NgModule({
  imports: [
    BrowserAnimationsModule, HttpModule, AccountRoutingModule
  ],
  declarations: [AccountComponent],
  exports: [AccountComponent]

})
export class AccountModule { }
