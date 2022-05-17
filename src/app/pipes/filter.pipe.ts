import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterCategory'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<Product>, categoryToSearch: string[] = []): Array<any> {
      if (!categoryToSearch || categoryToSearch.length == 0) {
        return items;
      }
      // aqui asumó que tu interfaz de producto tiene una propiedad llamada category por la cual vamos a filtrar
      return items.filter((p:Product) => categoryToSearch.some((category: string) => p.category == category));
  }

}
