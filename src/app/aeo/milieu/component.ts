import { ChangeDetectorRef, Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { MilieuService } from './service';
import { Milieu } from './milieu';
import { AppService } from '../../service';

@Component({
  selector: 'milieu',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class MilieuComponent implements OnInit {

  theme: string;
  themeSub = this.appService.currentTheme.subscribe(theme => this.theme = theme);

  milieuMode = 'OPENED';

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  mode = 'OPEN';

  milieu: Milieu;

  @Output() menuItemSelected = new EventEmitter<object>();


  milieuSub = this.milieuService.currentMilieu.subscribe(cp => {
    this.milieu = cp;
  });

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public milieuService: MilieuService, public appService: AppService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    console.log(appService.currentTheme);
  }

  ngOnInit() {

  }

  updateTheme(theme: string) {
    this.appService.changeTheme(theme + '-theme');
    //this.agentService.updateTheme(theme);
  }

  closeAllChildren() {
    //this.milieu.MenuItems.forEach(menuItem => menuItem.displayChildren = false);
  }

  toggleMilieuMode() {
    //this.closeAllChildren();



    if (this.milieuMode === 'OPENED') {
      this.milieuMode = 'ICON';
    } else {
      this.milieuMode = 'OPENED';
    }

  }

  displayChildren(menuItem) {
    if (this.mode === 'ICON') {
      menuItem.displayChildren = true;
    }
  }

  hideChildren(menuItem) {
    if (this.mode === 'ICON') {
      menuItem.displayChildren = false;
    }
  }

  toggleDisplayChildren(menuItem) {

    if (this.mode === 'ICON' && menuItem.displayChildren === false) {
      this.closeAllChildren();
    }

    menuItem.displayChildren = !menuItem.displayChildren
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.milieuSub.unsubscribe();
    this.themeSub.unsubscribe();
  }
}
