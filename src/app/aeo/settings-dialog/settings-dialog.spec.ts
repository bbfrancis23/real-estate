import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { SettingsDialog } from './settings-dialog';
import { AeoModule } from '../aeo/aeo.module';
import { MatTooltipModule, MatDialogModule, MatIconModule } from '@angular/material';
import { AppService } from '../app.service';

describe('SettingsDialog', () => {
  let component: SettingsDialog;
  let fixture: ComponentFixture<SettingsDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AeoModule, MatTooltipModule, MatDialogModule, MatIconModule],
      declarations: [SettingsDialog],
      providers: [AppService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
