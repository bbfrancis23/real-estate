import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urldecode'
})
export class UrlDecodePipe implements PipeTransform {

  transform(value: any, words: boolean) {

    if (value) {
      value = value.replace(/\-/g, ' ');
      if (words) {
        return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
      } else {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }

    return value;
  }
}
