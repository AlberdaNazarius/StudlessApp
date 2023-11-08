import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceAndDots'
})
export class SliceAndDotsPipe implements PipeTransform {
  transform(value: string, maxLength: number, dotsCount: number = 3): string {
    if (value.length <= maxLength) {
      return value;
    }
    if (maxLength <= dotsCount) {
      return '.'.repeat(dotsCount);
    }

    var result = value.slice(0, maxLength - dotsCount);
    result += '.'.repeat(dotsCount);
    return result;
  }
}
