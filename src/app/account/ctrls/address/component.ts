import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'address-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AddressControl {
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

  checkValid() {
    if (this.address.value || this.city.value || this.stateCtrl.value || this.zip.value) {
      if (this.address.value && this.address.valid && this.city.value && this.city.valid && this.stateCtrl.value && this.stateCtrl.valid && this.zip.value && this.zip.valid) {
        this.validAddress = true;
      } else {
        //console.log(this.address.value, this.address.valid, this.city.value, this.city.valid, this.stateCtrl.value, this.stateCtrl.valid, this.zip.value, this.zip.valid);
        this.validAddress = false;
      }

    } else {
      this.validAddress = true;
    }
  }
}
