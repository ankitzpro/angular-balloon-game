import { Component,Input,OnInit } from '@angular/core';
import { BalloonService} from './balloon.service'

import { Subscription } from 'rxjs';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit {

  @Input() gameData:any;

  constructor( private service: BalloonService){
  }

timer:string;
  composh:any
  sub:Subscription;
 ngOnInit() {
  this.sub = this.service.compoShow$.subscribe(compoShow => this.composh = compoShow);
  this.sub = this.service.timer$.subscribe(timer => this.timer = timer);

  }

 

}