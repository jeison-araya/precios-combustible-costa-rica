import { Component, OnInit } from '@angular/core';
import { RecopeApiService } from '../../services/recope-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consumerProducts: any[] = [];
  vendorProducts: any[] = [];
  consumerProductsLoaded = false;
  vendorProductsLoaded = false;

  constructor(private recopeApi: RecopeApiService) { }

  ngOnInit(): void {
    this.consumerProductsLoaded = false;
    this.vendorProductsLoaded = false;

    this.recopeApi.getConsumerPrices().subscribe(products => {
      this.consumerProducts = this.addInternalId(products);
      this.consumerProductsLoaded = true;
    });

    this.recopeApi.getVendorPrices().subscribe(products => {
      this.vendorProducts = products;
      this.vendorProductsLoaded = true;
    });
  }

  private addInternalId(products: any[]): any[] {

    products.forEach(function (product: any) {
      switch (product.id) {
        case '000000000000080018':
          product.id = 'super';
          break;
        case '000000000000080019':
          product.id = 'regular';
          break;
        case '000000000000080024':
          product.id = 'kerosone';
          break;
        case '000000000000080067':
          product.id = 'diesel';
          break;
      }
    });

    return products;
  }
}
