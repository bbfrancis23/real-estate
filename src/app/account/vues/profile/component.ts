import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'profile-vue',
  templateUrl: 'component.html',
  styleUrls: ['styles.scss']
})
export class ProfileVue implements OnInit {
  @Input() 'mode': string // ACCOUNT / CLIENT / AGENT
  editPermission = false;

  ngOnInit() {
    if (this.mode === 'ACCOUNT' || this.mode === 'CLIENT') {
      this.editPermission = true;
    }
  }

}
