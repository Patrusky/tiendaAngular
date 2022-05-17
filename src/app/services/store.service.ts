import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCard: Product[] = [];
  private myCard = new BehaviorSubject<Product[]>([]);
  private eliminado = 0;
  myCard$ = this.myCard.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCard.push(product);
    this.myCard.next(this.myShoppingCard);
    console.log('Añadido',this.myShoppingCard);
  }



   deleteProduct(product: Product){
    const eliminar = this.myShoppingCard.findIndex(p=> p.id === product.id);
    console.log("ELIMINADO", eliminar);
    if (eliminar >=  0){
        this.myShoppingCard.splice(eliminar, 1);
        console.log('eliminando')
        }
    this.myCard.next(this.myShoppingCard);
    console.log('eliminado',this.myShoppingCard);
  }

  getShoppingCard() {
    return this.myShoppingCard
  }
  getTotal() {
    return this.myShoppingCard.reduce((sum, item) => sum + item.price, 0)
  }
}
