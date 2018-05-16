import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AccountRoutingModule } from './routing.module';
import { AccountComponent } from './component';
import { MediaViewPort } from '../aeo/media-view-port/component';
import { AeoModule } from '../aeo/module';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailControl } from './ctrls/email/component';
import { PasswordControl } from './ctrls/password/component';
import { PhoneControl } from './ctrls/phone/component';
import { AddressControl } from './ctrls/address/component';
import { AccountNameControl } from './ctrls/account-name/component';

@NgModule({
  imports: [
    AccountRoutingModule,
    AeoModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatSelectModule, MatStepperModule,
    ReactiveFormsModule,
  ],
  declarations: [AccountComponent, PasswordControl, PhoneControl, AddressControl, AccountNameControl],
  exports: [AccountComponent, PasswordControl, PhoneControl, AddressControl, AccountNameControl]

})
export class AccountModule { }
