import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AeoSideDrawer } from './side-drawer';
import { MatIconModule } from '@angular/material';

export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 }
};

export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

describe('SideDrawerComponent', () => {
  let component: AeoSideDrawer;
  let fixture: ComponentFixture<AeoSideDrawer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [AeoSideDrawer]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeoSideDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be closed', () => {
    const drawer: HTMLElement = fixture.nativeElement;
    const div = drawer.querySelector('div.closed');
    expect(div).toBeTruthy();
  });

  it('sidedrawer control should toggle closed to be false', () => {
    const drawerDe: DebugElement = fixture.debugElement;
    const control = drawerDe.query(By.css('.aeo-sidedrawer-control'));
    const drawer: HTMLElement = fixture.nativeElement;
    fixture.detectChanges();

    click(control);

    const div = drawer.querySelector('div');

    //control.triggerEventHandler('click', false);

    console.log(div);

  });

});
