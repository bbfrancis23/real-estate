import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import { AccountRoutingModule } from './routing.module';
import { AccountComponent } from './component';
import { MediaViewPort } from '../aeo/media-view-port/component';
import { AeoModule } from '../aeo/module';
import { MatStepperModule, MatInputModule, MatButtonModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule, HttpModule, AccountRoutingModule, AeoModule, MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatInputModule
  ],
  declarations: [AccountComponent],
  exports: [AccountComponent]

})
export class AccountModule { }
