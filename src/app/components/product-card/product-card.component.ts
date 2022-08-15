import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  @Input() detailsHidden = true;
  @Input() showPrices = true;
  @Input() id = '';

  constructor() { }

  ngOnInit(): void {
  }

  private toggleDetails(): void {
    this.detailsHidden = !this.detailsHidden;
  }

}
