import { Component } from '@angular/core';
import { Buttonlist } from "../buttonlist/buttonlist";
import { VideoContainer } from "../video-container/video-container";

@Component({
  selector: 'app-main-container',
  imports: [Buttonlist, VideoContainer],
  templateUrl: './main-container.html',
  styleUrl: './main-container.scss',
})
export class MainContainer {
  

}
