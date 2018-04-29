import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountService } from './service';
import { AppService } from '../service';

@Component({
  selector: 'account',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class AccountComponent implements OnInit {
  isLinear = false;
  nameFG: FormGroup;
  phoneFG: FormGroup;
  addressForm: FormGroup;
  photoForm: FormGroup;

  selectedFile = null;


  account: Account;

  accountSub = this.accountService.currentAccount.subscribe(account => {
    this.account = account;

    if (this.nameFG) {
      this.nameFG.controls.nameFC.setValue(this.account.name);
    }

  });


  constructor(private _formBuilder: FormBuilder, public accountService: AccountService, public appService: AppService) {
    this.appService.getStates();
  }

  ngOnInit() {

    this.nameFG = this._formBuilder.group({
      nameFC: [this.account.name, [Validators.required, Validators.maxLength(this.accountService.NAME.max)]]
    });

    this.phoneFG = this._formBuilder.group({
      phoneAreaCodeCtrl: [this.accountService.account.phone ? this.accountService.account.phone.toString().substr(0, 3) : '', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]],
      phonePreCtrl: [this.accountService.account.phone ? this.accountService.account.phone.toString().substr(3, 3) : '', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]],
      phonePostCtrl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]+$/)]],
    });

    this.addressForm = this._formBuilder.group({
      addressCtrl: ['', [Validators.required, Validators.maxLength(this.accountService.ADDRESS.max)]],
      cityCtrl: ['', [Validators.required, Validators.maxLength(this.accountService.CITY.max)]],
      stateCtrl: ['', [Validators.required]],
      zipCtrl: ['', [Validators.required, Validators.minLength(this.accountService.ZIP.min), Validators.maxLength(this.accountService.ZIP.max), Validators.pattern(this.accountService.ZIP.pattern)]],
    });

    this.photoForm = this._formBuilder.group({
      photoCtrl: ['', []]
    });




  }



  updateName() {
    this.accountService.updateName(this.nameFG.value.nameFC);
  }

  onFileSelected(e) {
    this.selectedFile = e.target.files[0];
  }

  ngOnDestroy() {
    this.accountSub.unsubscribe();
  }
}
