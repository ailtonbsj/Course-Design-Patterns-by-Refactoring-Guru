import { Product } from "./product.model";

export abstract class Creator {
  abstract createProduct(): Product;

  someOperation(): string {
    let p = this.createProduct();
    return p.doStuff();
  }
}
