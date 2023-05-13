import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  winSize = '550px';
  
  resize() {
    if(this.winSize == '550px') this.winSize = '97%';
    else this.winSize = '550px';
  }

  close() {
    location.href = 'https://ailtonbsj.github.io';
  }
}
