import { Component, OnInit, Input } from '@angular/core';
import { RecopeApiService } from '../../services/recope-api.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  @Input() products: any[] = [];

  constructor() { }

  ngOnInit(): void { }

}
