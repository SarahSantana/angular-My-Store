import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): Array<any> {
    return this.items;
  }

  cleanCart(): Array<any> {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}