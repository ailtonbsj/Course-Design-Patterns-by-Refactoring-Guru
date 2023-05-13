import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[] = [];
  category: Category = <Category>{};

  constructor(private service: CategoryService) {
    this.categories = service.listAll();
  }

  save(input: string) {
    this.category = { id: -1, name: input};
    this.service.save(this.category);
  }

  remove(id: number) {
    this.service.remove(id);
  }
}
