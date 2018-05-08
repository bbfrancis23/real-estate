import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'email-ctrl',
  templateUrl: 'component.html'

})
export class EmailControl implements OnInit {

  readonly EMAIL = { max: 256 };

  email: FormControl;

  ngOnInit() {
    this.email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(this.EMAIL.max)]);
  }


  getEmailError() {
    return this.email.hasError('required') ? 'You must enter a value'
      : this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
