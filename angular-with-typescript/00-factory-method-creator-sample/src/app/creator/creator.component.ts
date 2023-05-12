import { Component } from '@angular/core';
import { CreatorAService } from './creator-a.service';
import { CreatorBService } from './creator-b.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styles: ['']
})
export class CreatorComponent {
  creatorA: string = '';
  creatorB: string = '';
  constructor(private a: CreatorAService, private b: CreatorBService){
    this.creatorA = a.someOperation();
    this.creatorB = b.someOperation();
  }
}
