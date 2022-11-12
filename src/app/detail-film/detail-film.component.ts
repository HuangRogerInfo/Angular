import { Component, OnInit } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../film';
import { FILMS } from '../mock-film-list';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  filmList: Film[];
  film: Film | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.filmList = FILMS;
    const filmId: string | null = this.route.snapshot.paramMap.get('id');

    if (filmId) {
      this.film = this.filmList.find(film => film.id == +filmId)
    }
  }

  goToFilmList() {
    this.router.navigate(['/films']);
  }

}
