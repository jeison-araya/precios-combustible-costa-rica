import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProductImagePipe } from './pipes/product-image.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceLabelColorPipe } from './pipes/price-label-color.pipe';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    ProductsListComponent,
    NavbarComponent,
    ProductsComponent,
    PricesComponent,
    ProductImagePipe,
    PriceLabelColorPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
