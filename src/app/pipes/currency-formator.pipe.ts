import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormator',
})
export class CurrencyFormatorPipe implements PipeTransform {
  transform(value: number, symbol: string = '₹'): string {
    if(!value) return '';

 return symbol + ' ' + value.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  }
}
