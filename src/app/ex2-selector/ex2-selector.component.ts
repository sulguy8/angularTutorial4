import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-selector',
  templateUrl: './ex2-selector.component.html',
  styleUrls: ['./ex2-selector.component.css']
})
export class Ex2SelectorComponent implements OnInit {
  public compStatus = '';
  public testNum = '1000';
  public testText = '';
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(status){
    this.compStatus = status;
  }
  hello(event){
    this.testText = event;
  }
}
