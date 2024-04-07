import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Imovie } from '../../../Models/imovie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: Imovie | null = null;
movies: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
if (id) {
  this.movieService.getMovie(id).subscribe(movie => {
    this.movie = movie;
  });
}
}
}
