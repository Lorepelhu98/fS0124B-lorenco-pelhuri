import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FiatComponent } from './component/fiat/fiat.component';
import { HomeComponent } from './component/home/home.component';
import { AudiComponent } from './component/audi/audi.component';
import { FordComponent } from './component/ford/ford.component';


const routes: Route[] = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'fiat',
      component: FiatComponent
  },
  {
      path: 'ford',
      component: FordComponent
  },
  {
      path: 'audi',
      component: AudiComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
