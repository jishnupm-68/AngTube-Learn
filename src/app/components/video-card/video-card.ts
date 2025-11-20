import { Component, Input } from '@angular/core';
import {  Snippet, Statistics, VideoItems,  } from '../../interface/video-items';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-video-card',
  imports: [RouterLink],
  templateUrl: './video-card.html',
  styleUrl: './video-card.scss',
})
export class VideoCard {
  @Input() snippet!:Snippet;
  @Input() statistics!:Statistics;
  @Input() videoItems!: VideoItems;
  url!:string;
  height!:number;
  width!:number;
  ngOnInit(){
     const {url,height, width} = this.snippet.thumbnails.medium
     this.height = height;
     this.url = url;
     this.width = width;
  }
}
   