import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceLabelColor'
})
export class PriceLabelColorPipe implements PipeTransform {
  private dispenserImages = [
    'GASOLINA SUPER ( SUPERIOR )',
    'GASOLINA PLUS 91 ( REGULAR )',
    'DIESEL 50',
    'GASOLEO',
    'GLP'
  ]
  transform(value: string, ...args: unknown[]): string {
    return (this.dispenserImages.includes(value))?'text-dark':'text-white-50';
  }

}
