import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Output() fromChildren: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
 
  }
  
  eventEmitter(){
    this.fromChildren.emit('hello!');
  }

}
