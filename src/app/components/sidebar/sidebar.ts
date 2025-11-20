import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../State/app.state';
import { openSidebar } from '../../State/sidebar/sidebar.action';
@Component({
  selector: 'app-sidebar',
  imports: [  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  constructor(private store:Store<AppState>){
      this.store.dispatch(openSidebar());
    }


}
