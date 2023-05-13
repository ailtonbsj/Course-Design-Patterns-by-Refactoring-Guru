import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  listAll() {
    return [
      { id: 1, name: "Rice" },
      { id: 2, name: "Bean" },
      { id: 3, name: "Coffee" },
      { id: 4, name: "Milk" }
    ]
  }

  save(entity: Product) {
    console.log('saved', entity);
  }

  remove(id: number) {
    console.log('removed '+ id);
  }
}
