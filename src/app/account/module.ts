import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import { AccountRoutingModule } from './routing.module';
import { AccountComponent } from './component';
import { MediaViewPort } from '../aeo/media-view-port/component';
import { AeoModule } from '../aeo/module';


@NgModule({
  imports: [
    BrowserAnimationsModule, HttpModule, AccountRoutingModule, AeoModule
  ],
  declarations: [AccountComponent],
  exports: [AccountComponent]

})
export class AccountModule { }
