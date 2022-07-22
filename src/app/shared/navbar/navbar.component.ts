import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

  scrollTo(id: string): void {
    const productsDiv = document.getElementById(id);
    if(productsDiv) { productsDiv.scrollIntoView(); }
  }

  showUser() {
    this.auth.getIdTokenClaims().subscribe({
      next: (token) => {
        console.log(token);
      }
    })

    // this.auth.getUser().subscribe({
    //   next: (user) => {
    //     console.log(user);
    //   }
    // });
  }
}
