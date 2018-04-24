import { Component } from '@angular/core';


@Component({
  selector: 'default',
  template: `
  <div class="view-port-container">
        <div class="media-wrapper">
          <media><video src="assets/img/re-short.mp4" autoplay="true" loop="true" ></video></media>
        </div>
        <div class="view-port-content">

        </div>
        <div class="view-port-overlay"></div>
      </div>


  `,
  styles: [`
      .view-port-container{
        height: 100vh;
        display: flex;
      }
      .media-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
      }
      .view-port-content{
          width: 100vw;
      }
      .view-port-overlay{
        height: 100vh;
        width: 100vw;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    `]
})
export class DefaultComponet {

}
