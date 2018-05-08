import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'phone-ctrl',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class PhoneControl implements OnInit {

  @ViewChild('prefixEl') prefixEl: ElementRef;
  @ViewChild('phonePostEl') phonePostEl: ElementRef;
  @Input() required = false;

  areaCode: FormControl;
  prefix: FormControl;
  suffix: FormControl;

  ngOnInit() {

    const patternValidator = Validators.pattern(/^[0-9]+$/);
    const threeDigitValidators = [Validators.minLength(3), Validators.maxLength(3)];

    if (this.required) {
      this.areaCode = new FormControl('', [Validators.required, patternValidator].concat(threeDigitValidators));
      this.prefix = new FormControl('', [Validators.required, patternValidator].concat(threeDigitValidators));
      this.suffix = new FormControl('', [Validators.required, patternValidator, Validators.minLength(4), Validators.maxLength(4)]);
    } else {
      this.areaCode = new FormControl('', [patternValidator].concat(threeDigitValidators));
      this.prefix = new FormControl('', [patternValidator].concat(threeDigitValidators));
      this.suffix = new FormControl('', [patternValidator, Validators.minLength(4), Validators.max(4)]);
    }
  }

  getErrorMessage() {
    if (this.suffix.errors) return "Invalid Phone Number"
  }

  areaCodeKeyUp() {
    if (this.areaCode.value && this.areaCode.value.toString().length === 3) this.prefixEl.nativeElement.focus()
  }

  preKeyUp() {
    if (this.prefix.value && this.prefix.value.toString().length === 3) this.phonePostEl.nativeElement.focus()
  }
}
