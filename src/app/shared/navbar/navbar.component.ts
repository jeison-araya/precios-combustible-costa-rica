import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(id: string): void {
    const productsDiv = document.getElementById(id);
    if(productsDiv) { productsDiv.scrollIntoView(); }
  }

}
