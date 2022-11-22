import { Component, OnInit } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  filmList: Film[];
  film: Film | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    const filmId: string | null = this.route.snapshot.paramMap.get('id');

    if (filmId) {
      this.film = this.filmService.getFilmId(+filmId);
    }
  }

  goToFilmList() {
    this.router.navigate(['/films']);
  }

  goToEditFilm(film: Film) {
    this.router.navigate(['/edit/film', film.id]);
  }

}
