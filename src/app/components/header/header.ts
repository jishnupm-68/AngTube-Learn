import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { selectSidebar } from '../../State/sidebar/sidebar.selector';
import { AppState } from '../../State/app.state';
import { toggleSidebar } from '../../State/sidebar/sidebar.action';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-header',
  imports: [ RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  sidebar$ : Observable<boolean>
  constructor(private store:Store<AppState>){
    this.sidebar$ = this.store.select(selectSidebar)
  } 
  
  toggleSidebar(){
    this.store.dispatch(toggleSidebar())
  }
}
