import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';

import { AgentService } from '../../../agent/service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Account } from '../../account';

import { AddressControl } from '../../ctrls/address/component';
import { AccountNameControl } from '../../ctrls/account-name/component';

import { AccountService } from '../../service';
import { Subscription } from 'rxjs';

// new
import { EmailFormControl } from '../../../aeo/form-controls/email/component';
import { PhoneFormControl } from '../../../aeo/form-controls/phone/component';
import { AccountNameFormControl } from '../../../aeo/form-controls/account-name/component';
import { AddressFormControl } from '../../../aeo/form-controls/address/component';


@Component({
  selector: 'profile-vue',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class ProfileVue implements OnInit, OnDestroy {



  @ViewChild(EmailFormControl) emailFormCtrl;
  @ViewChild(AccountNameFormControl) accountNameCtrl;
  @ViewChild(PhoneFormControl) phoneFormCtrl;
  @ViewChild(AddressFormControl) addressFormCtrl;

  @ViewChild('file') file: any;

  @Input() 'mode': string // ACCOUNT / CLIENT / AGENT
  editPermission = false;

  @Output() close = new EventEmitter();

  nameEditMode = false;
  emailEditMode = false;
  phoneEditMode = false;
  addressEditMode = false;

  showProfileVue = true;
  account: Account;
  clients: [Account];

  clientSub: Subscription;
  clientsSub: Subscription;

  selectedFile = null;
  imgError: string;
  imgEditMode = false;

  nameForm = new FormGroup({});
  phoneForm = new FormGroup({});
  emailForm = new FormGroup({});
  photoForm = new FormGroup({});
  addressForm = new FormGroup({});

  constructor(private _formBuilder: FormBuilder, public agentService: AgentService, public accountService: AccountService) {


  }

  ngOnInit() {
    if (this.mode === 'ACCOUNT' || this.mode === 'CLIENT') {
      //this.editPermission = true;
    }

    if (this.mode === 'CLIENT') {

      this.clientSub = this.agentService.currentSelectedClient.subscribe(client => {
        this.account = client;
        //console.log(this.account);
      });

      this.clientsSub = this.agentService.currentClients.subscribe(clients => {
        this.clients = clients;
      });

    }


    this.emailForm.addControl('email', this.emailFormCtrl.email);
    this.nameForm.addControl('accountName', this.accountNameCtrl.accountName);

    this.photoForm = this._formBuilder.group({
      photoCtrl: ['', []]
    });

    this.phoneForm.addControl('areaCode', this.phoneFormCtrl.areaCode);
    this.phoneForm.addControl('suffix', this.phoneFormCtrl.suffix);
    this.phoneForm.addControl('prefix', this.phoneFormCtrl.prefix);

    this.addressForm.addControl('address', this.addressFormCtrl.address);
    this.addressForm.addControl('city', this.addressFormCtrl.city);
    this.addressForm.addControl('state', this.addressFormCtrl.stateCtrl);
    this.addressForm.addControl('zip', this.addressFormCtrl.zip);


  }



  nameSubmit() {
    this.accountService.updateName(this.nameForm.value.accountName, this.account._id).then(result => {
      if (result) {
        //this.agentService.getClients();
        this.nameEditMode = false;
        this.account.name = this.nameForm.value.accountName;
        this.nameForm.reset();

      } else {

      }
    });
  }

  onFileSelected(e) {
    //console.log(e.target.files[0].type);

    if (e.target.files[0].type === 'image/jpeg' || e.target.files[0].type === 'image/png') {
      this.selectedFile = e.target.files[0];
      this.imgError = null;
    } else {
      this.selectedFile = null;
      this.imgError = "Invalid File. Only use JPG or PNG";
    }


  }

  emailSubmit() {

    this.accountService.updateEmail(this.emailForm.value.email, this.account._id).then(response => {
      if (response.result) {
        this.agentService.getClients();
        this.emailEditMode = false;
        this.account.email = this.emailForm.value.email;
        this.emailForm.reset();
      } else {
        if (response.code === 11000) {
          this.emailForm.controls['email'].setErrors({ 'unique': true });
        } else {
          this.emailForm.controls['email'].setErrors({ 'database': true });
        }
      }
    });
  }

  addressSubmit() {

    //console.log(this.addressForm.value);
    this.accountService.updateAddress(this.addressForm.value, this.account._id).then(response => {
      if (response) {
        this.agentService.getClients();
        this.addressEditMode = false;
        this.account.address = this.addressForm.value.address;
        this.addressForm.reset();
      } else {

        this.addressForm.controls['address'].setErrors({ 'database': true });

      }
    });
    // */
  }

  phoneSubmit() {
    let phone = `${this.phoneFormCtrl.areaCode.value}${this.phoneFormCtrl.prefix.value}${this.phoneFormCtrl.suffix.value}`;
    this.accountService.updatePhone(phone, this.account._id).then(response => {
      if (response) {
        this.agentService.getClients();
        this.phoneEditMode = false;
        //this.account.email = this.emailForm.value.email;
        this.phoneForm.reset();
      } else {

      }
    });
  }

  uploadImg() {
    this.accountService.uploadImg(this.selectedFile, this.account._id).then(
      response => {
        this.agentService.getClients();
        this.imgEditMode = false;
        this.photoForm.reset();
        this.file.nativeElement.value = "";
      }
    );
  }



  ngOnDestroy() {
    this.clientSub.unsubscribe();
    this.clientsSub.unsubscribe();
  }
}
