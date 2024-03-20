import { Component } from '@angular/core';
import { iArticolo } from './models/articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  articoliArr:iArticolo[] = [];

  ngOnInit(){
    fetch('../assets/articolo.json')
    .then(articolo => articolo.json())
    .then((articolo) => (this.articoliArr = articolo.posts))
  }
}
