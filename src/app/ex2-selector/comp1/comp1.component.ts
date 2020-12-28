import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @Input() toChildren: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.toChildren)
  }
}
