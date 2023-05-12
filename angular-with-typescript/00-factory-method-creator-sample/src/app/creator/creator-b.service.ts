import { Injectable } from '@angular/core';
import { Creator } from './creator.service';
import { ProductB } from './product-b.model';
import { ProductA } from './product-a.model';

@Injectable({
  providedIn: 'root'
})
export class CreatorBService extends Creator {

  override createProduct(): ProductA {
    return new ProductB;
  }

  constructor() {
    super();
  }
}
