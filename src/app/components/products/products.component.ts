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

  vendorDiv = document.getElementById("");
  constructor() { }

  ngOnInit(): void {
  }

  showConsumerProducts(): void {
    if(!this.consumerProductsHidden){
      this.consumerProductsHidden = true;
    } else {
      this.scrollToProducts();
      this.vendorProductsHidden = true;
      this.consumerProductsHidden = false;
    }
  }

  showVendorProducts(): void {
    if(!this.vendorProductsHidden){
      this.vendorProductsHidden = true;
    } else {
      this.scrollToProducts();
      this.consumerProductsHidden = true;
      this.vendorProductsHidden = false;
    }
  }

  private scrollToProducts(): void {
    const productsDiv = document.getElementById("products-list");
    if(productsDiv) { productsDiv.scrollIntoView(); }
  }
}
