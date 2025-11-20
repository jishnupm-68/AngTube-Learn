import { Component } from '@angular/core';
import { MainContainer } from "../main-container/main-container";
import { Sidebar } from "../sidebar/sidebar";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../State/app.state';
import { selectSidebar } from '../../State/sidebar/sidebar.selector';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-body',
  imports: [ Sidebar, AsyncPipe, RouterOutlet],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {

    sidebar$ : Observable<boolean>
  constructor(private store:Store<AppState>){

    this.sidebar$ = this.store.select(selectSidebar)
  }

}
