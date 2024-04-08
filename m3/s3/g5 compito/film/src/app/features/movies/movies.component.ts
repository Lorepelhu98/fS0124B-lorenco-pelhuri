import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Imovie } from '../../Models/imovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movies!: Imovie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }
}

