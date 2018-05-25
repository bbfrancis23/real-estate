import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './service';

'use strict';

@Component({
  selector: 'app-root',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private lastTheme = 'corporate-theme';

  themeSub = this.appService.currentTheme.subscribe(theme => {
    this.overlayContainer.getContainerElement().classList.remove(this.lastTheme);
    document.body.classList.remove(this.lastTheme);

    this.lastTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    document.body.classList.add(theme);
  });

  constructor(private overlayContainer: OverlayContainer, public appService: AppService) { }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.appService.defaultTheme);
    document.body.classList.add(this.appService.defaultTheme);
  }

  ngOnDestroy() {
    this.themeSub.unsubscribe();
  }
}
