import { Component } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-buttonlist',
  imports: [Button],
  templateUrl: './buttonlist.html',
  styleUrl: './buttonlist.scss',
})
export class Buttonlist {
  list:string[] =['All', 'News', 'Music', 'Live' , 'Game', 'Cricket', 'Cooking'  ]

}
