import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmComponent } from './list-film/list-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { BorderCardDirective } from './border-card.directive';
import { MovieGenreColorPipe } from './movie-genre-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FilmService } from './film.service';
import { FormsModule } from '@angular/forms';
import { FilmFormComponent } from './film-form/film-form.component';
import { EditFilmComponent } from './edit-film/edit-film.component';

const filmRoutes: Routes = [
  { path: 'edit/film/:id', component: EditFilmComponent },
  { path: 'films', component: ListFilmComponent },
  { path: 'film/:id', component: DetailFilmComponent }
];

@NgModule({
  declarations: [
    ListFilmComponent,
    DetailFilmComponent,
    BorderCardDirective,
    MovieGenreColorPipe,
    FilmFormComponent,
    EditFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(filmRoutes)
  ],
  providers: [FilmService]
})
export class FilmModule { }
