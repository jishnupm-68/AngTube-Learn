import { Component } from '@angular/core';
import { AppState } from '../../State/app.state';
import { Store } from '@ngrx/store';
import { closeSidebar } from '../../State/sidebar/sidebar.action';
import { ActivatedRoute } from '@angular/router';

import { SafePipe } from '../../safe-pipe';

@Component({
  selector: 'app-watch-page',
  imports: [SafePipe],
  templateUrl: './watch-page.html',
  styleUrl: './watch-page.scss',
})
export class WatchPage {
  videoId$!:string|null;
  videoLink:string="";
  constructor(private store:Store<AppState>, private route:ActivatedRoute){
    this.store.dispatch(closeSidebar());
  }

  ngOnInit(){
     this.videoId$ =this.route.snapshot.queryParamMap.get('v');
     this.videoLink = "https://www.youtube.com/embed/"+this.videoId$
  }

}
   