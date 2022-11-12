import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'films', component: ListFilmComponent },
  { path: 'film/:id', component: DetailFilmComponent },
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
