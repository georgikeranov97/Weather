import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterByLocation'
})
export class FilterByLocationPipe implements PipeTransform {

  transform(item: Array<any>) {
    if (item !== undefined && item !== null) {
      return _.uniqBy(item, 'location');
    }

    return location;
  }

}
