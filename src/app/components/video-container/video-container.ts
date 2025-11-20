import { Component } from '@angular/core';
import { GetYoutubeVideo } from '../../service/get-youtube-video';
import { Store } from '@ngrx/store';
import { AppState } from '../../State/app.state';
import { map, Observable } from 'rxjs';
import { selectVideo } from '../../State/Video/video.selector';
import { AsyncPipe } from '@angular/common';
import { VideoCard } from "../video-card/video-card";
import { VideoItems } from '../../interface/video-items';

@Component({
  selector: 'app-video-container',
  imports: [AsyncPipe, VideoCard],
  templateUrl: './video-container.html',
  styleUrl: './video-container.scss',
})
export class VideoContainer {
  videoData$ !: Observable<VideoItems[]>;
  constructor(private youtube: GetYoutubeVideo, private store:Store<AppState>){
    youtube.getYoutubeVideo();

    this.videoData$ = this.store.select(selectVideo).pipe(
  map((videos: any) => videos.items)
); 
  }
}   
