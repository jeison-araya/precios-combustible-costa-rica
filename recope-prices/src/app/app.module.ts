import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { PricesComponent } from './components/prices/prices.component';
import { ImgPipe } from './pipes/img.pipe';
import { ProductImagePipe } from './pipes/product-image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMenuComponent,
    ProductCardComponent,
    ProductsListComponent,
    NavbarComponent,
    ProductsComponent,
    PricesComponent,
    ImgPipe,
    ProductImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
