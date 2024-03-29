import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './visual/home/home.component';
import { ContentComponent } from './visual/content/content.component';
import { SpazioComponent } from './visual/spazio/spazio.component';
import { UsersComponent } from './visual/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'todo',
    component: SpazioComponent,
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
