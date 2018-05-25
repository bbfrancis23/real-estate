/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatIconModule, MatInputModule, MatDialogModule } from '@angular/material';

import { AccountDialog } from './component';

import { AccountModule } from '../module';
import { AccountService } from '../service';

describe('AccountDialog', () => {
  let component: AccountDialog;
  let fixture: ComponentFixture<AccountDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountModule, FormsModule, MatIconModule, ReactiveFormsModule, MatInputModule, MatDialogModule],
      declarations: [AccountDialog],
      providers: [AccountService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getEmailError should return "You must enter a value" when blank', () => {
    component.emailFC.markAsDirty();
    expect(component.getEmailError()).toBe('You must enter a value');
  });

  it('getEmailError should return "Not a valid email" when value is "brian francis" ', () => {
    component.emailFC.setValue('brian francis')
    expect(component.getEmailError()).toBe('Not a valid email');
  });

  it('getEmailError should return "Not a valid email" when value is "brian" ', () => {
    component.emailFC.setValue('brian')
    expect(component.getEmailError()).toBe('Not a valid email');
  });

  it('getEmailError should return "Not a valid email" when value is "brian@" ', () => {
    component.emailFC.setValue('brian@')
    expect(component.getEmailError()).toBe('Not a valid email');
  });

  it('getPasswordError should return "You must enter a value." when blank', () => {
    expect(component.getPasswordError()).toBe('You must enter a value.');
  });

  it('getPasswordError should return "Not a valid password." when value is "b rd"', () => {
    component.passwordFC.setValue('b rd')
    expect(component.getPasswordError()).toBe('Not a valid password.');
  });

  it(`getPasswordError should return "You must enter at least 4 characters." when value is "123"`, () => {
    component.passwordFC.setValue('123')
    expect(component.getPasswordError()).toBe(`You must enter at least ${component.PASSWORD.min} characters.`);
  });


  it(`getPasswordError should return "Too long." when value is "12345678901234567"`, () => {
    component.passwordFC.setValue('12345678901234567')
    expect(component.getPasswordError()).toBe(`Too long.`);
  });

  it('defaults to SIGN IN', () => {
    expect(component.action).toBe(component.LOGIN);
  })

  it('should change to CREATE ACCOUNT', () => {
    component.tradeActions();
    expect(component.action).toBe(component.CREATE);
  });

  it('should change action to RESET PASSWORD', () => {
    component.setActionResetPassword();
    expect(component.action).toBe(component.RESET_PASSWORD);
  })
}); */
