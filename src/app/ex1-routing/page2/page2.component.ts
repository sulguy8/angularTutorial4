import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  public testNum = this.route.snapshot.paramMap.get('num');
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.testNum)
  }

}
