import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }

  listAll() {
    return [
      { id: 1, name: "Convenience" },
      { id: 2, name: "Shopping" },
      { id: 3, name: "Specialty" },
      { id: 4, name: "Unsought" }
    ]
  }

  save(entity: Category) {
    console.log('saved', entity);
  }

  remove(id: number) {
    console.log('removed '+ id);
  }
}
