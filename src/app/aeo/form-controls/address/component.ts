import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from '../../../service';


@Component({
  selector: 'address-form-control',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AddressFormControl implements OnInit {
  readonly ADDRESS = { max: 256 };
  readonly EMAIL = { max: 256 };
  readonly CITY = { max: 32 };
  readonly ZIP = { min: 5, max: 10, pattern: /^[0-9\-]+$/ };

  @Input() states;
  validAddress = true;


  address = new FormControl('', [Validators.maxLength(this.ADDRESS.max)]);
  city = new FormControl('', [Validators.maxLength(this.CITY.max)]);
  stateCtrl = new FormControl('', []);
  zip = new FormControl('', [Validators.minLength(this.ZIP.min), Validators.maxLength(this.ZIP.max), Validators.pattern(this.ZIP.pattern)]);

  constructor(public appService: AppService) {
    this.appService.getStates();
  }

  ngOnInit() {


  }

  checkValid() {


    if (this.address.value && this.address.valid && this.city.value && this.city.valid && this.stateCtrl.value && this.stateCtrl.valid && this.zip.value && this.zip.valid) {
      return true;
    } else {
      return false;
    }

  }
}
