import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string): string {
    let slicedDate = date.slice(0, 10);
    slicedDate = slicedDate.replace(/\./g, '/');
    return slicedDate;
  }

}
