import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {
  @Input() film: Film;
  types: string[];

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    // ListTypeList
    this.types = this.filmService.getFilmTypeList();
  }

  // Si il est de type x
  hasType(type: string): boolean {
    return this.film.type.includes(type);
  }

  // Si il a le type on l'enleve, sinon on l'ajoute
  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.film.type.push(type);
    } else {
      const index = this.film.type.indexOf(type);
      this.film.type.splice(index, 1);
    }
  }

  onSubmit() {
    console.log('Submit form !');
    this.router.navigate(['/film', this.film.id])
  }

  isTypesValid(type: string): boolean {
    if (this.film.type.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.film.type.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

}
