import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [];
  product: Product = <Product>{};

  constructor(private service: ProductService) {
    this.listAll();
  }

  listAll() {
    this.service.listAll().subscribe({
      next: entities => this.products = entities,
      error: e => console.log(e)
    });
  }

  save(input: string) {
    this.product = <Product>{}
    this.product.name = input;
    this.service.save(this.product).subscribe({
      next: () => {
        this.listAll()
        alert('Product saved with success!')
      },
      error: e => console.log(e)
    });
  }

  remove(id: number) {
    this.service.remove(id).subscribe({
      next: () => {
        this.listAll()
        alert('Product removed with success!')
      },
      error: e => console.log(e)
    });
  }

}
