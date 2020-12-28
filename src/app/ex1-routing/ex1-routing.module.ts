import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RoutingRoutingModule } from './ex1-routing-routing.module';
import { Ex1RoutingComponent } from './ex1-routing.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    Ex1RoutingComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    CommonModule,
    Ex1RoutingRoutingModule
  ]
})
export class Ex1RoutingModule { }
