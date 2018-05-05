import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import { AccountRoutingModule } from './routing.module';
import { AccountComponent } from './component';
import { MediaViewPort } from '../aeo/media-view-port/component';
import { AeoModule } from '../aeo/module';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailControl } from './ctrls/email/component';
import { PasswordControl } from './ctrls/password/component';

@NgModule({
  imports: [
    AccountRoutingModule,
    AeoModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatSelectModule, MatStepperModule,
    ReactiveFormsModule,
  ],
  declarations: [AccountComponent, PasswordControl],
  exports: [AccountComponent, PasswordControl]

})
export class AccountModule { }
