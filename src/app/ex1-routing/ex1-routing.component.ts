import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ex1-routing',
  templateUrl: './ex1-routing.component.html',
  styleUrls: ['./ex1-routing.component.css']
})
export class Ex1RoutingComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goPage(url){
    this.router.navigateByUrl(url);
  }

}
