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
    this.products = service.listAll();
  }

  remove(id: number) {
    this.service.remove(id);
  }

  save(input: string) {
    this.product = { id: -1, name: input };
    this.service.save(this.product);
  }

}
