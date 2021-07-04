import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecopeApiService {
  constructor(private http: HttpClient) { }
  /**
   * Gets the consumer prices observable.
   * 
   * @returns Observable request.
   */
  getConsumerPrices(): Observable<any> {
    return this.http.get('https://api.recope.go.cr/ventas/precio/consumidor');
  }
/**
   * Gets the vendor prices observable.
   * 
   * @returns Observable request.
   */
  getVendorPrices(): Observable<any> {
    return this.http.get('https://api.recope.go.cr/ventas/precio/plantel');
  }
}
