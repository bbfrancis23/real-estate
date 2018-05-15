import { ChangeDetectorRef, Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ControlPanelService } from './service';
import { ControlPanel } from './control-panel';
import { AppService } from '../../service';

@Component({
  selector: 'control-panel',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']

})
export class ControlPanelComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  mode = 'OPEN';

  controlPanel: ControlPanel;

  @Output() menuItemSelected = new EventEmitter<object>();


  controlPanelSub = this.controlPanelService.currentControlPanel.subscribe(cp => {
    this.controlPanel = cp;
  });

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public controlPanelService: ControlPanelService, public appService: AppService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

  }

  updateTheme(theme: string) {
    this.appService.changeTheme(theme + '-theme');
    //this.agentService.updateTheme(theme);
  }

  closeAllChildren() {
    this.controlPanel.MenuItems.forEach(menuItem => menuItem.displayChildren = false);
  }

  toggleMode() {

    this.closeAllChildren();



    if (this.mode === 'OPEN') {
      this.mode = 'ICON';
    } else {
      this.mode = 'OPEN';
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
    this.controlPanelSub.unsubscribe();
  }
}
