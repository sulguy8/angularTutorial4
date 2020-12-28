import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : '',
    pathMatch : 'full'
  },
  {
    path: 'ex1',
    loadChildren: () => import('./ex1-routing/ex1-routing.module').then( m => m.Ex1RoutingModule)
  },
  {
    path: 'ex2',
    loadChildren: () => import('./ex2-selector/ex2-selector.module').then( m => m.Ex2SelectorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
