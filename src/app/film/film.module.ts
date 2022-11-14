import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { BorderCardDirective } from './border-card.directive';
import { MovieGenreColorPipe } from './movie-genre-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FilmService } from './film.service';

const filmRoutes: Routes = [
  { path: 'films', component: ListFilmComponent },
  { path: 'film/:id', component: DetailFilmComponent }
];

@NgModule({
  declarations: [
    ListFilmComponent,
    DetailFilmComponent,
    BorderCardDirective,
    MovieGenreColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(filmRoutes)
  ],
  providers: [FilmService]
})
export class FilmModule { }
