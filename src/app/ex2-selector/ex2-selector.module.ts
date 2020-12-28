import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex2SelectorRoutingModule } from './ex2-selector-routing.module';
import { Ex2SelectorComponent } from './ex2-selector.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';


@NgModule({
  declarations: [
    Ex2SelectorComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    CommonModule,
    Ex2SelectorRoutingModule
  ]
})
export class Ex2SelectorModule { }
