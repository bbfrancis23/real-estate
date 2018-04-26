import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import { AccountRoutingModule } from './routing.module';
import { AccountComponent } from './component';
import { MediaViewPort } from '../aeo/media-view-port/component';
import { AeoModule } from '../aeo/module';
import { MatStepperModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AccountRoutingModule,
    AeoModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule, MatInputModule, MatIconModule, MatStepperModule,
    ReactiveFormsModule,
  ],
  declarations: [AccountComponent],
  exports: [AccountComponent]

})
export class AccountModule { }
