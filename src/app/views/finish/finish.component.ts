import { Component, OnInit } from '@angular/core';
import { BalloonService} from '../../balloon.service';
@Component({
  selector: 'finish',
  templateUrl: './finish.component.html'
})
export class FinishComponent implements OnInit {

  constructor(private service: BalloonService) { }
finscore=this.service.finalscore;;

  ngOnInit() {
  }
  
  reload(){
    window.location.reload();
  }
}
