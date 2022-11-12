import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieGenreColor'
})
export class MovieGenreColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'sci-fi':
        color = 'red lighten-1';
        break;
      case 'action':
        color = 'blue lighten-1';
        break;
      case 'animation':
        color = 'green lighten-1';
        break;
      case 'musical':
        color = 'blue lighten-3';
        break;
      case 'drame':
        color = 'deep-purple accent-1';
        break;
      default:
        color = 'grey';
        break;
    }
    return 'chip ' + color;
  }

}