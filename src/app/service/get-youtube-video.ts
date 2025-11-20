import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YOUTUBE_VIDEO_API } from '../../constant';
import { Store } from '@ngrx/store';
import { AppState } from '../State/app.state';
import { addVideos } from '../State/Video/video.action';

@Injectable({
  providedIn: 'root',
})
export class GetYoutubeVideo {
  private http  = inject(HttpClient);
  constructor(private store:Store<AppState>){}
  getYoutubeVideo():void{
      this.http.get(YOUTUBE_VIDEO_API).subscribe({
        next: (data)=>{
          this.store.dispatch(addVideos({videos:data}))
        }
      })
  }
}
