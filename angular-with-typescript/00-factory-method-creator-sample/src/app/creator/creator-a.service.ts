import { Injectable } from '@angular/core';
import { Creator } from './creator.service';
import { ProductA } from './product-a.model';

@Injectable({
  providedIn: 'root'
})
export class CreatorAService extends Creator {

  constructor() {
    super();
  }

  override createProduct(): ProductA {
    return new ProductA();
  }

}
