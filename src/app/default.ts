import { Component } from '@angular/core';


@Component({
  selector: 'default',
  template: `
  <media-view-port>
    <media><video src="/assets/img/re.mp4" autoplay="true" loop="true" ></video></media>
    <content><entry></entry></content>
  </media-view-port>

  `
})
export class DefaultComponet {

}
