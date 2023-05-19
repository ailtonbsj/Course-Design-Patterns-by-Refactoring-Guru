import { Product } from "./product.model";

export class ProductA implements Product {
  doStuff(): string {
    return "Created Product A.";
  }
}
