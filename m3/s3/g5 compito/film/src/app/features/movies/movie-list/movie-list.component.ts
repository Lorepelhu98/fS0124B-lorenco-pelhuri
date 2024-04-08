import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Imovie } from '../../../Models/imovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  movies: Imovie[] = [];
  movie!: Imovie;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }
}
