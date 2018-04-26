import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountService } from './service';

@Component({
  selector: 'account',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class AccountComponent {
  isLinear = false;
  nameFG: FormGroup;
  phoneFG: FormGroup;

  constructor(private _formBuilder: FormBuilder, public accountService: AccountService) { }

  ngOnInit() {
    this.nameFG = this._formBuilder.group({
      nameFC: ['', [Validators.required, Validators.maxLength(this.accountService.NAME.max)]]
    });
    this.phoneFG = this._formBuilder.group({
      phoneAreaCodeCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]],
      phonePreCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]+$/)]],
      phonePostCtrl: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]+$/)]],
    });
  }

  updateName() {
    //console.log(this.nameFG.value.nameFC);
    this.accountService.updateName(this.nameFG.value.nameFC);
  }
}
