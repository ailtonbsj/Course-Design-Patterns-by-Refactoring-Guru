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
    this.listAll();
  }

  listAll() {
    this.service.listAll().subscribe({
      next: entities => this.categories = entities,
      error: e => console.log(e)
    });
  }

  save(input: string) {
    this.category = <Category>{}
    this.category.name = input;
    this.service.save(this.category).subscribe({
      next: () => {
        this.listAll()
        alert('Category saved with success!')
      },
      error: e => console.log(e)
    });
  }

  remove(id: number) {
    this.service.remove(id).subscribe({
      next: () => {
        this.listAll()
        alert('Category removed with success!')
      },
      error: e => console.log(e)
    });
  }
}
