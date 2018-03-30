import { Pipe, PipeTransform } from '@angular/core';

function compare (a: any, b: any)  {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }

  return 0;
}

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], name: string, direction: boolean): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return this.transformImp(value, name, direction);
  }

  private transformImp (value: any[], name: string, direction: boolean): any[] {
    value.sort((a: any, b: any) => {
      return compare(a[name], b[name]);
    });

    return direction ? value : value.reverse();
  }


}
