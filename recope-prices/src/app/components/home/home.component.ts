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

  this.recopeApi.getConsumerPrices().subscribe(response => {
    this.consumerProducts = response;
    this.consumerProductsLoaded = true;
  });

  this.recopeApi.getVendorPrices().subscribe(response => {
    this.vendorProducts = response;
    this.vendorProductsLoaded = true;
  });
  }
}
