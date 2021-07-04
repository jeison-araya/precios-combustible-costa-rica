import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() consumerProducts: any[] = [];
  @Input() vendorProducts: any[] = [];
  
  consumerProductsHidden = true;
  vendorProductsHidden = true;

  consumerImg = './assets/images/car.png';
  vendorImg = './assets/images/truck.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  showConsumerProducts(): void {
    this.vendorProductsHidden = true;
    this.consumerProductsHidden = false;
  }

  showVendorProducts(): void {
    this.consumerProductsHidden = true;
    this.vendorProductsHidden = false;
  }
}
