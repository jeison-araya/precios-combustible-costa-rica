import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  @Input() products: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  filteredList(): any[] {
    return this.products.filter(function(product){
      return product.nomprod != 'KEROSENE';
    });
  }
}
