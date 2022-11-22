import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {

  film: Film | undefined;

  constructor(
    private route: ActivatedRoute,
    private fimService: FilmService
  ) { }

  ngOnInit(): void {
    const filmId: string | null = this.route.snapshot.paramMap.get('id');
    if (filmId) {
      this.film = this.fimService.getFilmId(+filmId);
    } else {
      this.film = undefined;
    }

  }

}
