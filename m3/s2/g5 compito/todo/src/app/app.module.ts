import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './visual/home/home.component';
import { TodosComponent } from './visual/todos/todos.component';
import { UsersComponent } from './visual/users/users.component';
import { ContentComponent } from './visual/content/content.component';
import { SpazioComponent } from './visual/spazio/spazio.component';
import { FullNamePipe } from './pipes/name.service';
import { FormsModule } from '@angular/forms';
import { IdentifierPipe } from './pipes/dentifier.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    HomeComponent,
    TodosComponent,
    UsersComponent,
    ContentComponent,
    SpazioComponent,
    FullNamePipe,
    IdentifierPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
