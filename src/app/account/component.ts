import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from './service';

@Component({
  selector: 'account',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class AccountComponent {
  isLinear = false;
  nameFG: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public accountService: AccountService) { }

  ngOnInit() {
    this.nameFG = this._formBuilder.group({
      nameFC: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  updateName() {
    //console.log(this.nameFG.value.nameFC);
    this.accountService.updateName(this.nameFG.value.nameFC);
  }
}
