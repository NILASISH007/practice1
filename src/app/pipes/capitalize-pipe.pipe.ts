import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePipe'
})
export class CapitalizePipePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return '';

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
@Pipe({
  name: 'AllcapitalizePipe',
})
export class AllCapitalizePipePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.toUpperCase() ;
  }
}
