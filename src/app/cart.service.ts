import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

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

}