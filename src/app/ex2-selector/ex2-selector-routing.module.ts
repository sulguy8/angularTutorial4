import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ex2SelectorComponent } from './ex2-selector.component';

const routes: Routes = [
  {
    path: '',
    component: Ex2SelectorComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ex2SelectorRoutingModule { }
