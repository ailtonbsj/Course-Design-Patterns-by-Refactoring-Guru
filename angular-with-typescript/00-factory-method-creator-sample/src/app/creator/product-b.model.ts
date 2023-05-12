import { Product } from "./product.model";

export class ProductB implements Product {
  doStuff(): string {
    return "Created Product B.";
  }
}
