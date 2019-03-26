import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], field: any, args: any): any {
    if (args == null) { return array; }
    return array.filter(function(item) {
      return item[field].toLowerCase().indexOf(args.toLowerCase()) > -1;
    });
  }

}
