import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImage'
})
export class ProductImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log(value);
    console.log(`./assets/images/products/${value}.png`);

    return `./assets/images/products/${value}.png`;
  }

}
