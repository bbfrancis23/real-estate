import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'address-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AddressControl implements OnInit {
  readonly ADDRESS = { max: 256 };
  readonly EMAIL = { max: 256 };
  readonly CITY = { max: 32 };
  readonly ZIP = { min: 5, max: 10, pattern: /^[0-9\-]+$/ };

  @Input() states;



  address: FormControl;
  city: FormControl;
  stateCtrl: FormControl;
  zip: FormControl

  ngOnInit() {
    this.address = new FormControl('', [Validators.maxLength(this.ADDRESS.max)]);
    this.city = new FormControl('', [Validators.maxLength(this.CITY.max)]);
    this.stateCtrl = new FormControl('', []);
    this.zip = new FormControl('', [Validators.minLength(this.ZIP.min), Validators.maxLength(this.ZIP.max), Validators.pattern(this.ZIP.pattern)]);
  }

}
