import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador',
  pure: false
})

export class BuscadorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (item.puesto.match('^.*' + args + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
