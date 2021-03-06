import { Component, OnInit } from '@angular/core';
import { BalloonService} from '../../balloon.service';
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {

  constructor(private service: BalloonService) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 3;

  ngOnInit() {
this.anstext=this.service.anstext;
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
        if(this.service.level>=30){
          //this.routers.navigate(['/start'])
          this.service.changeCompo('Finish');
          clearInterval(this.intervalId);
        }
        else if(this.service.compoShowValue=='Finish'){
          clearInterval(this.intervalId);
        }
       else{
        this.service.changeCompo('Game');
        clearInterval(this.intervalId);
      } 
    }
    }, 1000);
  }
}
