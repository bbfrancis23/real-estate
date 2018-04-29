import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountService } from './service';
import { AppService } from '../service';

import { Account } from './account';

@Component({
  selector: 'account',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class AccountComponent implements OnInit, OnDestroy {
  isLinear = false;
  nameForm: FormGroup;
  phoneForm: FormGroup;
  addressForm: FormGroup;
  photoForm: FormGroup;

  selectedFile = null;


  account: Account;

  accountSub = this.accountService.currentAccount.subscribe(account => {
    this.account = account;

    if (this.nameForm) {
      this.nameForm.controls.name.setValue(this.account.name);
    }

    if (this.phoneForm) {
      this.phoneForm.controls.phoneAreaCode.setValue(this.account.phone.toString().substr(0, 3));
      this.phoneForm.controls.phonePre.setValue(this.account.phone.toString().substr(3, 3));
      this.phoneForm.controls.phonePost.setValue(this.account.phone.toString().substr(6, 4));
    }

    if (this.addressForm) {
      this.addressForm.controls.address.setValue(this.account.address.address);
      this.addressForm.controls.city.setValue(this.account.address.city)
      this.addressForm.controls.state.setValue(this.account.address.state);
      this.addressForm.controls.zip.setValue(this.account.address.zip)
    }

  });


  constructor(private _formBuilder: FormBuilder, public accountService: AccountService, public appService: AppService) {
    this.appService.getStates();
  }

  ngOnInit() {

    this.nameForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.accountService.NAME.max)]]
    });

    this.phoneForm = this._formBuilder.group({
      phoneAreaCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]],
      phonePre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]],
      phonePost: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]+$/)]],
    });

    this.addressForm = this._formBuilder.group({
      address: ['', [Validators.required, Validators.maxLength(this.accountService.ADDRESS.max)]],
      city: ['', [Validators.required, Validators.maxLength(this.accountService.CITY.max)]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.minLength(this.accountService.ZIP.min), Validators.maxLength(this.accountService.ZIP.max), Validators.pattern(this.accountService.ZIP.pattern)]],
    });

    this.photoForm = this._formBuilder.group({
      photoCtrl: ['', []]
    });
  }



  updateName() {
    this.accountService.updateName(this.nameForm.value.name);
  }

  onFileSelected(e) {
    this.selectedFile = e.target.files[0];
  }

  ngOnDestroy() {
    this.accountSub.unsubscribe();
  }
}
