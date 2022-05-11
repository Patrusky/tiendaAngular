import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCard: Product[] = [];
  private myCard = new BehaviorSubject<Product[]>([]);

  myCard$ = this.myCard.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCard.push(product);
    this.myCard.next(this.myShoppingCard);
  }

  getShoppingCard() {
    return this.myShoppingCard
  }
  getTotal() {
    return this.myShoppingCard.reduce((sum, item) => sum + item.price, 0)
  }
}
